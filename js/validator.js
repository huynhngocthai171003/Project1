//đối tượng
function Validator(options) {

    
    function validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector('.form-message');
                    
                    if(errorMessage){
                        errorElement.innerText = errorMessage;
                        inputElement.parentElement.classList.add('invalid');
                    }
                    else{
                        errorElement.innerText ='';
                        inputElement.parentElement.classList.remove('invalid');
                    }
    }
    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            
            if(inputElement) {
                inputElement.onblur = function() {
                    validate(inputElement, rule);
                }
            }
        })
    }
}



//định nghĩa các rules
//nguyên tấc rules:
// khi có lỗi tả ra message lỗi
//khi hợp lệ không trả ra cái gì cả
Validator.isRequired = function(selector) {
    return{
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined:'Please enter this field'
        }
    };
}

Validator.isEmail = function(selector) {
    return{
        selector: selector,
        test: function() {

        }
    };
}