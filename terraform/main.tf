resource "azurerm_resource_group" "rg" {
  name     = "rg-nodejs-cicd"
  location = "East US"
}

resource "azurerm_container_registry" "acr" {
  name                = "sivaacr12345678"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location

  sku           = "Basic"
  admin_enabled = true
}

resource "azurerm_service_plan" "plan" {
  name                = "plan-nodejs-cicd"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location

  os_type  = "Linux"
  sku_name = "B1"
}

resource "azurerm_linux_web_app" "app" {
  name                = "siva-nodejs-cicd-app"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  service_plan_id = azurerm_service_plan.plan.id

  app_settings = {
    WEBSITES_PORT = "3000"
  }

  site_config {}
}