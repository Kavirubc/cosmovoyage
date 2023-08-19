const ErrorManager = (response) => {

    console.log(response);
  
    if (response.success === false) {

        let errors = response.data;

        if (!Array.isArray(errors)) {
        // array does not exist or is empty

        const keys = Object.keys(errors);

        keys.forEach((key, index) => {
            document.querySelector("#" + key + "-error").innerHTML = errors[key];
        });

        } else {
            // a lot of text fileds exists
            //console.log(errors);

            const keys = Object.keys(errors);

            keys.forEach((key, index) => {
                console.log(`${key}: ${errors[key]}`);
            });
        }
    }
};

export default ErrorManager;