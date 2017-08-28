//Set target.copy.pathsuffix to false
context.setVariable("target.copy.pathsuffix", false);

var role = context.getVariable("createProxyReqPrefix.role");
var org = context.getVariable("createProxyReqPrefix.org");
var targetPath = "/v1/organizations/"+org+"/userroles/"+role+"/permissions";
context.setVariable("targetPath", targetPath);