### dependencies
curl https://raw.githubusercontent.com/helm/helm/master/scripts/get > get_helm.sh
chmod 700 get_helm.sh
./get_helm.sh -v v2.10.0

echo $SERVICE_ACCOUNT_KEY > sak.json

gcloud auth activate-service-account --key-file sak.json

gcloud auth configure-docker

make deploy
