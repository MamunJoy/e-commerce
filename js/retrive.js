const url=`http://localhost:3000/products`;

const fetchData=async url=>{
    const res=await fetch(url);
    const data=await res.json();
    displayData(data);
}
const goodsSection=document.getElementById('card-container');
const displayData=productsData=>{
    console.log(productsData);
    productsData.forEach(product=>{
        const name=product.name;
        console.log(name);
        const card=document.createElement('div');
        card.classList.add('col');
        card.innerHTML=`
        <div class="card h-100">
        <img src="image/1.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text sample">${name}</p>
        </div>
      </div>
        `;
        goodsSection.appendChild(card);
    })
}
fetchData(url);