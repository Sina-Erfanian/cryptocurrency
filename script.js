const api = async () => {
  let fetchApi = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    {
      headers: {
        accept: "application/json",
      },
    }
  );
  let res = await fetchApi.json();
  return res;
};
const btCoin = document.querySelector("#bt");
const dgCoin = document.querySelector("#dg");
const etCoin = document.querySelector("#et");
function price(bt, dg, et) {
  btCoin.innerHTML = `$${bt}`;
  etCoin.innerHTML = `$${et}`;
  dgCoin.innerHTML = `$${dg}`;
}

api().then((data) => {
  let usdBt = data.bitcoin.usd;
  let usdDg = data.dogecoin.usd;
  let usdEt = data.ethereum.usd;
  price(usdBt, usdDg, usdEt);
});
