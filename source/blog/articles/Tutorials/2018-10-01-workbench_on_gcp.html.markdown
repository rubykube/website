---

title: Workbench on Google Cloud Platform
date: 2018-10-01 08:51 UTC
category: Tutorials
thumbnail_image: https://cloud.google.com/images/training/qwiklabs-gcp-essentials.png
tags: [ Rubykube, Tutorials ]

---

<p>
<strong>Requirements:</strong>
</p>

<ul class="ml-2">
<li>* Experience with Google Cloud Platform.</li>
<li>* Google Cloud Project.</li>
</ul>

<h2 class="mt-4 mb-3">Create Virtual Machine</h2>

<ul class="ml-2">
    <p>* Open Google Cloud Console.</p>
    <p>* On the left sidebar find <strong>Compute Engine -> VM instances.</strong></p>
    <p>* At the top of the page click <strong>CREATE INSTANCE.</strong></p>
    <p>* Change name of the instance from <em>instance-1</em> to a better name.</p>
    <p>* Choose <strong>region</strong> and <strong>zone</strong>, that fits your needs best.</p>
    <p>* Select machine type, recommended is <strong>n1-standart-8</strong>, required is <strong>n1-standart-4</strong>.</p>
    <p>* Increase size of the boot disk, recommended size is <strong>60GB</strong>, required is <strong>45GB</strong>.</p>
    <p>* Don't change default OS image: <em>Debian GNU/Linux 9 (stretch)</em>.</p>
    <p>* Check two checkboxes under the <strong>Firewall</strong> section.
        <ul class="ml-4">
          <li>
            <input type="checkbox" id disabled class="task-list-item-checkbox" checked>
             Allow HTTP traffic
          </li>
          <li>
            <input type="checkbox" id disabled class="task-list-item-checkbox" checked>
             Allow HTTPS traffic
          </li>
        </ul>
    </p>
    <p>* <strong>Double check</strong> your settings before creating.</p>
    <p>
      <img class="col-md-12" src="https://camo.githubusercontent.com/087e942149862f48dc0177d051842371e62a2254/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f69643d314c536c746d4944744c714b786d6b435a7030324f485a654d375f637630595456" alt="Settings before VM Creation">
    </p>
    <p>* Click <strong>Create</strong> button at the bottom of the page.</p>
</ul>

<h2 class="mt-4 mb-3">Post creation steps</h2>
<p>Here is your created vm. In the green rectangle you will find public IP of your virtual machine.</p>
<p>
  <img class="col-md-12" src="https://camo.githubusercontent.com/8d71c7505d3a42828ae7fff33cd278c1383f280a/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f69643d317262336f6a7050572d2d45714770575864414a42514f7734443453736f76356c" alt="Settings before VM Creation">
</p>
<p class="ml-2">* Create A record and point it to public IP of your workbench machine.</p>
<p>
  <img class="col-md-12" src="https://camo.githubusercontent.com/2c1b9239396fd62558acacabe60c0f90120234b1/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f69643d316c6a52786f68756a396c326c786d5a6d6d495a516d36635a4356344661376958" alt="Settings before VM Creation">
</p>

<h2 class="mt-4 mb-3">Install workbench</h2>
<p><strong>SSH to the created virtual machine</strong></p>

<blockquote class="quotes">
  <pre class="mb-0">
  $<span class="text-primary">></span> gcloud compute --project <span class="text-primary"><</span>project-id<span class="text-primary">></span> ssh --zone <span class="text-primary"><</span>vm-zone<span class="text-primary">></span> <span class="text-primary"><</span>vm-name<span class="text-primary">></span></pre>
</blockquote>

<p><strong>Login as root user</strong></p>

<blockquote class="quotes">
  <pre class="mb-0">
  $<span class="text-primary">></span> sudo -i</pre>
</blockquote>

<p><strong>Install docker</strong></p>

<blockquote class="quotes">
  <pre class="mb-0">
  $<span class="text-primary">></span> curl -fsSL get.docker.com <span class="text-primary">|</span> sh</pre>
</blockquote>

<p><strong>Install docker-compose</strong></p>

<blockquote class="quotes">
  <pre class="mb-0">
  $<span class="text-primary">></span> curl -L "https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  $<span class="text-primary">></span> chmod +x /usr/local/bin/docker-compose</pre>
</blockquote>

<p><strong>Install dependencies</strong></p>

<blockquote class="quotes">
  <pre class="mb-0">
  $<span class="text-primary">></span> apt-get update -y
  $<span class="text-primary">></span> apt-get install -y git autoconf bison build-essential libssl-dev \
                                                                libyaml-dev libreadline6-dev zlib1g-dev \
                                                                libncurses5-dev libffi-dev libgdbm3 libgdbm-dev</pre>
</blockquote>

<p><strong>Create user</strong></p>

<blockquote class="quotes">
  <pre class="mb-0">
  $<span class="text-primary">></span> useradd --create-home -g users -G docker --shell /bin/bash workbench
  $<span class="text-primary">></span> su workbench 
  $<span class="text-primary">></span> <span class="text-info">cd</span> $HOME</pre>
</blockquote>

<p><strong>Install rbenv and ruby</strong></p>

<blockquote class="quotes">
  <pre class="mb-0">
  $<span class="text-primary">></span> git clone git://github.com/sstephenson/rbenv.git .rbenv
  $<span class="text-primary">></span> git clone git://github.com/sstephenson/ruby-build.git <span class="text-primary">~</span>/.rbenv/plugins/ruby-build
  
  $<span class="text-primary">></span> <span class="text-info">echo</span> 'export PATH="$HOME/.rbenv/bin:$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' <span class="text-primary">>> ~</span>/.bash_profile
  $<span class="text-primary">></span> <span class="text-info">echo</span> 'eval "$(rbenv init -)"' <span class="text-primary">>> ~</span>/.bash_profile 
  
  $<span class="text-primary">></span> <span class="text-info">source</span> <span class="text-primary">~</span>/.bash_profile
  
  $<span class="text-primary">></span> rbenv install -v 2.5.1
  $<span class="text-primary">></span> rbenv global 2.5.1
  
  $<span class="text-primary">></span> <span class="text-info">echo</span> "gem: --no-document" <span class="text-primary">> ~</span>/.gemrc
  
  $<span class="text-primary">></span> gem install bundler</pre>
</blockquote>

<p><strong>Download workbench</strong></p>

<blockquote class="quotes">
  <pre class="mb-0">
  $<span class="text-primary">></span> git clone --recursive https://www.github.com/rubykube/workbench.git <span class="text-primary">&&</span> <span class="text-info">cd</span> workbench</pre>
</blockquote>

<p><strong>Download submodules</strong></p>

<blockquote class="quotes">
  <pre class="mb-0">
  $<span class="text-primary">></span> make update</pre>
</blockquote>

<p><strong>Download workbench dependencies</strong></p>

<blockquote class="quotes">
  <pre class="mb-0">
  $<span class="text-primary">></span> bundle install</pre>
</blockquote>

<p><strong>Replace domain</strong></p>
<p>Set <code class="bg-secondary">$new_domain</code> variable equal to your domain and run bash script:</p>

<blockquote class="quotes">
  <pre class="mb-0">
  <span class="text-muted">#!/bin/bash</span>
  
  old_domain="wb.local" 
  new_domain="your.domain"
  
  files=(
      "compose/proxy.yaml"
      "compose/backend.yaml"
      "compose/app.yaml"
      "config/trading-ui.env"
      "compose/cryptonodes.yaml"
      "config/integration/fixtures/barong.json"
      "config/integration/fixtures/peatio.json"
      "config/peatio.env"
      "config/barong/seeds.yml"
      "config/toolbox.yaml"
  )
  
  <span class="text-primary">for</span> file <span class="text-primary">in</span> files<span class="text-primary">; do</span>
      sed -i "s/${old_domain}/${new_domain}/g" ${file}
  <span class="text-primary">done</span></pre>
</blockquote>

<p><strong>Build images</strong></p>

<blockquote class="quotes">
  <pre class="mb-0">
  $<span class="text-primary">></span> make build</pre>
</blockquote>

<p><strong>Run the application</strong></p>

<blockquote class="quotes">
  <pre class="mb-0">
  $<span class="text-primary">></span> make run</pre>
</blockquote>