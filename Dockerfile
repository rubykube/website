FROM starefossen/ruby-node:latest

EXPOSE 8080

COPY . /app

WORKDIR  /app

RUN bundle install && npm install

CMD ["sh", "-c", "bundle exec middleman"]
