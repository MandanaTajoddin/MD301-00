const $main = $('main')

const $selector = $('#image-filter')

const apiURL =
'https://raw.githubusercontent.com/CodePartnersMD/MD301-01/master/02-jquery-selectors-events/lab/page-1.json'

const Unicorn = function (imageObj) {
   this.name = imageObj.name;
   this.image_url = imageObj.image_url;
   this.hobbies = imageObj.hobbies; 
   this.title = imageObj.title;
   this.keyword = imageObj.keyword;
   
};

let allUnicorn = [];

Unicorn.prototype.renderUnicorn = imageObj => {
    
    let $unicornClone = $('#image-template').clone()
    $main.append($unicornClone)
    $unicornClone.attr('id',imageObj.keyword)
    $unicornClone.find('img').attr('src',imageObj.image_url)
    $unicornClone.find('p').text(imageObj.title)

}

$($selector).on('change', () =>{

$('section').hide()

$(`section[id=${event.target.value}]`).show()

})


$.getJSON(apiURL,response => {
    response.forEach((val) => {
        let newUnicorn = new Unicorn(val)
        allUnicorn.push(newUnicorn)
        newUnicorn.renderUnicorn(val)
        $selector.append(`<option value=${newUnicorn.keyword}>${newUnicorn.keyword}</option>`)
    })
    
})







