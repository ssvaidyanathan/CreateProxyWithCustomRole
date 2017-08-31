# Create Proxy With Custom Role

## Clone this repo
	git clone https://github.com/ssvaidyanathan/CreateProxyWithCustomRole.git

## Create Org Admin Credentials in an encrypted KVM 
	
	curl -X POST \
		  https://<mgmt-server-host>/v1/organizations/<org>/keyvaluemaps \
		  -H 'authorization: Basic <auth>' \
		  -H 'content-type: application/json' \
		  -d '{   
		 "name" : "PFCredsOrg",
		 "encrypted" : "true",
		 "entry" : [ 
		  {
		   "name" : "OrgAdminCreds",
		   "value" : "Basic <auth>"
		  }
		 ]
		}'
	

***NOTE: Please provide your base64 encoded value above. Do not change anything else in the request payload***

## Once the KVM is created, run the following command
	mvn clean install -P<profile> -Dorg=<org> -Dusername=<username> -Dpassword=<password> -Dapigee.config.options=update

***Note: The pom file is pointing to the Apigee Public SaaS Management Server, if you are using Private cloud, 
	please update the apigee.hosturl info in the profiles***

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

***NOTE: In the [edge.json](./edge.json) file, I have configured the target server to point to the Apigee SaaS Management Server.
Please update the entry (host, port) to point to your Private Mgmt Server host if you are on Private Cloud.***

***NOTE: Please update the environment name within the [edge.json](./edge.json). My example points to "test", if you any other env, please update***

***NOTE: If you have other environments, please extend the pom.xml profiles to include those and call them via Maven using -P***
