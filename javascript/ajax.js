function getData() {
	var tableData;
	$.get('https://domain.com/products/1', function(response) {
		tableData = response;
	});
	return tableData;
}

console.log(getData()); // undefined

function getData() {
    return new Promise(function(resolve, reject) {
        $.get('url 주소/products/1', function(response) {
            resolve(response);
        });
    });
}

