FROM ruby:2.6.5 AS middleman-builder

ENV APP_HOME=/app
ENV RUBYOPT=-EUTF-8

RUN apt-get update && apt-get install -y git curl wget nodejs npm

WORKDIR $APP_HOME

COPY Gemfile Gemfile.lock $APP_HOME/
RUN gem install bundler:2.0.2 \
    && bundle install --jobs=$(nproc) --without test development

COPY package.json $APP_HOME/
RUN npm install -g

COPY . $APP_HOME
RUN bundle exec middleman build

FROM nginx:mainline-alpine

COPY --from=middleman-builder /app/build /usr/share/nginx/html
EXPOSE 8080
