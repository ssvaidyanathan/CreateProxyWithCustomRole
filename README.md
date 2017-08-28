# Create Proxy With Custom Role

## Create Org Admin Credentials in an encrypted KVM using the following [API](http://docs.apigee.com/management/apis/post/organizations/%7Borg_name%7D/keyvaluemaps/%7Bmap_name%7D/entries)

	KVM Name: PFCredsOrg
	Payload: 
	{
	  "name" : "OrgAdminCreds",
	  "value" : "Basic <auth>"
	}

	NOTE: Please provide your base64 encoded value above

## Once the KVM is created, run the following command
	`mvn clean install -Ptest -Dorg=<org> -Dusername=<username> -Dpassword=<password> -Dapigee.config.options=update`

	Note: The pom file is pointing to the Apigee Public SaaS Management Server, if you are using Private cloud, please update the `apigee.hosturl` info in the profiles

The above should create Target Server and also deploy the bundle to your Apigee Org

To call the proxy, run the following curl command

```
curl -X POST \
  http://<proxy-host>/v1/apigee/apis/proxy/create \
  -H 'content-type: application/json' \
  -d '{
  "org":"someOrg",
  "api":"someAPI",
  "role": "someRole"
}'
```
This should create a proxy and also assign the custom role permissions to this newly created proxy