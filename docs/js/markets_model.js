/* ---------------------------------------------------------------------------- */
/*                                Random                                        */
/* ---------------------------------------------------------------------------- */

function GLB_randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

/* ---------------------------------------------------------------------------- */
/*                            PRODUCT PROTO                                   */
/* ---------------------------------------------------------------------------- */

function Product(json) {
    
    if (json != undefined) {
        this.json = json;
    } else {
        this.json = {
            id          : "",
            user_login  : "",
            observed_on : "",
            image_url   : "",
            latitude    : "",
            longitude   : "",
            common_name : "",
            market_name : "",
            geographical: "",
            health_facts: "",
            usage       : ""
         }
    }
         
}

Product.prototype = {
    
    setBox: function(content) {
        var boxHTML = '<div class="yz_box">'+content+'</div>';
        return boxHTML;
    },
    
    setImageBox: function() {
        // console.log(this.json.image_url);
        var myHTML = '<div class="yz_heart"><img src="img/heart-color.png" width="15" align="left"/><p>+ Add a photo</p></div>' +
            '<div class="yz_img"><img src="'+this.json.image_url+'" width="100%" /></div>';
        
        return this.setBox(myHTML);
    },
    
    showImage: function() {
        $("#yz-product-infosBoxes .container").append(this.setImageBox());
    },  
    
    appendToContainer : function(content) {
        $("#yz-product-infosBoxes .container").append(this.setBox(content));
    }
}

/* ---------------------------------------------------------------------------- */
/*                           Components OPTIONS                                 */
/* ---------------------------------------------------------------------------- */



/*----------------------------------------------------------------------------------*/
// >>>> DB PARAMS <<<<


$.getJSON( "js/data.js", function( data ) {
    
    var select = [];
    
    for (var i in data) {
        if (data[i]["common_name"] != null) {
            if (data[i]["common_name"].indexOf("Banana") != -1) {
                 var product = new Product(data[i]);
                select.push(product);
            }
        }
    }
    
    select[0].appendToContainer('<div class="yz_heart"><img src="img/heart-color.png" width="15" align="left"/><p>'+GLB_randomIntFromInterval(120,1200)+'<p></div><p class="txtOnly">One banana contains only 105 calories</p>');
    
    select[0].showImage();
    select[0].appendToContainer('<div class="yz_heart"><img src="img/heart-color.png" width="15" align="left"/><p>'+GLB_randomIntFromInterval(120,1200)+'<p></div><p class="txtOnly">Bananas are grown in 335 countries</p>');
    select[1].showImage();
    select[2].showImage();
 
});




