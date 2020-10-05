const mb = [
    {
        id: 1,
        name: "Gigabyte B450 AORUS ELITE BESTSELLER",
        price: 409

    },
    {
        id: 2,
        name:"Gigabyte X570 GAMING",
        price: 769
    },
    {
        id:3,
        name: "Gigabyte GA-A320M-S2H BESTSELLER",
        price: 239
    }
]
const gfx = [
    {
        id: 1,
        name: "Gigabyte GeForce GTX 1050Ti Windforce OC 4GB GDDR5 (GV-N105TOC-4GD)",
        price: 639

    },
    {
        id: 2,
        name:"Gigabyte GeForce GTX 1660 OC 6GB GDDR5 (GV-N1660OC-6GD)",
        price: 939
    },
    {
        id:3,
        name: "MSI GeForce GTX 1650 D6 Gaming X 4GB GDDR6 (GTX 1650 D6 GAMING X)",
        price: 745
    }
]
const cpu = [
    {
        id: 1,
        name: "Intel Core i5-10400F, 2.9GHz, 12 MB, BOX (BX8070110400F)",
        price: 699

    },
    {
        id: 2,
        name:"Intel Core i7-10700K, 3.8GHz, 16 MB, BOX (BX8070110700K)",
        price: 1749
    },
    {
        id:3,
        name: "AMD Ryzen 5 3600, 3.6GHz, 32 MB, BOX (100-100000031BOX)",
        price: 929
    }
]
const ram = [
    {
        id: 1,
        name: "Pamięć HyperX Predator RGB, DDR4, 16 GB, 4000MHz, CL19 (HX440C19PB3AK2/16 )",
        price: 689

    },
    {
        id: 2,
        name:"Pamięć Corsair Vengeance RGB PRO, DDR4, 16 GB, 3200MHz, CL16 (CMW16GX4M2C3200C16) ",
        price: 349
    },
    {
        id:3,
        name: "Pamięć HyperX Predator, DDR4, 16 GB, 3200MHz, CL16 (HX432C16PB3K2/16)",
        price: 355
    }
]
var cart = [

    {
        name: 'mainboard',
        price:0
    },
    {
        name: 'graphic card',
        price:0
    },
    {
        name: 'processor',
        price:0
    },
    {
        name: 'ram',
        price:0
    },
]


let summaryCompHandler = document.getElementById("summaryComp");

function addOpt(elem, optValue, textOpt) {
    let select1 = document.getElementById(elem);  // pobranie id miejsca do dodania opcji
    let option = document.createElement( "option"); //utworzenie elementu option
    option.setAttribute( "value", optValue); //dodaje atrybut value
    const textOption = document.createTextNode(textOpt);  // tekst do opcji
    option.appendChild(textOption); // dodanie tekstu do opcji
    select1.appendChild(option); // finalizacja dodanie opcji
}
function SelectedItemValue(SelectId) {
    const selectedItem = document.getElementById(SelectId)
    let strAtt = selectedItem.options[selectedItem.selectedIndex].getAttribute('value');
    console.log("Wybrany element ma ID:" + strAtt);

    const summaryCPU = document.getElementById("summaryCpu");
    const summaryMb = document.getElementById("summaryMb");
    const summaryGfx = document.getElementById("summaryGfx");
    const summaryRam = document.getElementById("summaryRam");

    if (SelectId == "cpu") {
        summaryCPU.innerHTML = cpu[strAtt - 1].name + " " + cpu[strAtt - 1].price
        cart[2].price = cpu[strAtt - 1].price
        cart[2].name = cpu[strAtt - 1].name
    } else if (SelectId == "mb") {
        summaryMb.innerHTML = mb[strAtt - 1].name + " " + mb[strAtt - 1].price
        cart[0].price = mb[strAtt - 1].price
        cart[0].name = mb[strAtt - 1].name
        document.getElementById("summaryMainboard").innerHTML
    } else if (SelectId == "gfx") {
        summaryGfx.innerHTML = gfx[strAtt - 1].name + " " + gfx[strAtt - 1].price
        cart[1].price = gfx[strAtt - 1].price
        cart[1].name = gfx[strAtt - 1].name
    }
    else if (SelectId == "ram") {
        summaryRam.innerHTML = ram[strAtt - 1].name + " " + ram[strAtt - 1].price
        cart[3].price = ram[strAtt - 1].price
        cart[3].name = ram[strAtt - 1].name
    }
    else {}

    document.getElementById("sumAll").innerHTML="<b>Suma koszyka:"+ (cart[0].price+cart[1].price+cart[2].price+cart[3].price) + "</b>"
}



    for (let i = 0; i < mb.length; i++) {
        addOpt("mb", mb[i].id, mb[i].name)
    }
    for (let i = 0; i < gfx.length; i++) {
        addOpt("gfx", gfx[i].id, gfx[i].name)
    }
    for (let i = 0; i < cpu.length; i++) {
        addOpt("cpu", cpu[i].id, cpu[i].name)
    }
    for (let i = 0; i < ram.length; i++) {
        addOpt("ram", ram[i].id, ram[i].name)
    }



