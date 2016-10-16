/**
 * Converte data do FormData object.
 */
function formDataObject (data, method) {
    if (data == undefined) {
        return data;
    }

    var fd = new FormData();

    if (method) {
        fd.append('_method', method);
    }

    angular.forEach(data, function(value, key) {
    	if (value instanceof FileList) {
    		if (value.length == 1) {
                fd.append(key, value[0]);
           	} else {
           		angular.forEach(value, function(file, index) {
                  	fd.append(key + '[' + index + ']', file);
                });
            }
    	} else {
        	fd.append(key, value);
        }
    });

    return fd;
}

/**
 * Contatena dois objetos
 */
function jsonConcat(principal, secondary) {

    for (var key in secondary) {
        principal[key] = secondary[key];
    }

    return principal;
}

/**
 * Retorna se está no mobile
 */
function isMobile() {
    return $('#mobile').is(':hidden');
}

/**
 * Retorna se item de mesmo id está na lista
 */
function containsItemId(items, item) {
    var contains = false;
    
    for (i in items) {
        if (items[i].id == item.id) {
            contains = true;
            break;
        }
    }

    return contains;
}

/**
 * Adiciona propriedade selected=true em item selecionado
 */
function markSelected(items, item) {

    for(var i in items) {
        if (items[i].id == item.id) {
            items[i].selected = true;
            break;
        }
    }

    return items;
}
//# sourceMappingURL=helpers.js.map
