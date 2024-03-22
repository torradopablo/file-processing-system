const validateJSONSchema = (data, schema) => {
    const dataKeys = Object.keys(data);
    const schemaKeys = Object.keys(schema.properties); 
  
    const missingKeys = schema.required.filter(key => !dataKeys.includes(key));
    
    if (missingKeys.length > 0) {
      console.log("ACA1")

      return false;
    }
  
    const extraKeys = dataKeys.filter(key => !schemaKeys.includes(key));
    if (extraKeys.length > 0) {
      console.log("ACA2")
      return false;
    }
    console.log("HOLA")
    return true;
  };
  
module.exports = validateJSONSchema;