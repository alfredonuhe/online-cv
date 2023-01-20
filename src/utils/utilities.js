 /**
 * Calculates path of resource depending on project path.
 * @param {String} path path of resource
 */
function getResourcePath(path='') {
  const config = getJsonConfig();
  var configPath = config.repositoryName;
  var noPrefix = (configPath === '' || configPath === '/' 
    || (path.length > 0 && !path.includes('/static/')));
  var prefix = (noPrefix) ? '' : '/' + configPath;
  return prefix + path;
}

/**
 * Retrieves JSON file.
 * Used to avoid including JSON in bundle.
 * @param {String} path path of resource.
 */
function getJsonConfig() {
  return require('../static/json/config.json');
}
  
export {getResourcePath, getJsonConfig};