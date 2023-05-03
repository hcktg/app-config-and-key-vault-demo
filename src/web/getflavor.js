const { parseKeyVaultSecretIdentifier, SecretClient } = require("@azure/keyvault-secrets");
const { AppConfigurationClient, parseSecretReference } = require("@azure/app-configuration");
const { DefaultAzureCredential } = require("@azure/identity");

async function getFlavor() {
    const azureCredential = new DefaultAzureCredential();
    // const keyVaultName = "my-first-key-vault-name2";
    // const keyVaultUrl = `https://${keyVaultName}.vault.azure.net`;
    // const keyVaultClient = new SecretClient(keyVaultUrl, azureCredential);
    const appConfigName = "my-first-app-config-name";
    const appConfigUrl = `https://${appConfigName}.azconfig.io`;
    const appConfigClient = new AppConfigurationClient(appConfigUrl, azureCredential);

    // const pizzaFlavor = await keyVaultClient.getSecret("pizzaflavor");
    const pizzaFlavorNonsecret = await appConfigClient.getConfigurationSetting({key: "pizzatopping"}); // .value // Per https://github.com/Azure/azure-sdk-for-js/issues/12330#issuecomment-728823175, this 403's out unless the login context has "App Configuration Data Owner" permission.  "Owner" isn't enough.
    const tempResponse = await appConfigClient.getConfigurationSetting({ key: "pizzaflavorkv" });
    const parsedSecretReference = parseSecretReference(tempResponse);
    const { name: kvSecretName, vaultUrl: kvVaultUrl } = parseKeyVaultSecretIdentifier(parsedSecretReference.value.secretId);
    const kvClient = new SecretClient(kvVaultUrl, azureCredential);
    const pizzaFlavorSecret = await kvClient.getSecret(kvSecretName); // .value
    return { pizzaFlavorNonsecret, pizzaFlavorSecret };
}

module.exports = getFlavor;