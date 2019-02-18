// filter buttons
(function () {
    const filterBtn = document.querySelectorAll('.filter-btn');
    //console.log(filterBtn);

    filterBtn.forEach(function(btn) {
        btn.addEventListener('click', function () {
            //prevent default action
            event.preventDefault();
            const value = event.target.dataset.filter;
            //console.log(value);
            const items = document.querySelectorAll('.store-item');

            items.forEach(function (item) {
                if (value === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(value)) {
                        item.style.display = 'block';
                    }
                    else {
                        item.style.display = 'none';
                    }

                }
            })
        })
    })
})();

// search input 

(function () {
// target search box
    const search = document.getElementById('search-item');
    
    search.addEventListener('keyup', function(){
        let value = search.value.toLowerCase().trim();
        //console.log(value);
        
        const items = document.querySelectorAll('.store-item');
        items.forEach(function(item){
            let name = item.children[0].children[1].children[0].children[0].textContent.toLowerCase().trim();
            
            
        if (name.includes(value)){
            item.style.display = 'block';
        }
         else {
            item.style.display = 'none';
        }
            
        });
        
    });
})();
