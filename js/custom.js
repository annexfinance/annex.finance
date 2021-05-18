const apiBaseURL = "https://api.venus.io/api";

$(document).ready(function () {
  $(window).scroll(function () {
    // this will work when your window scrolled.
    var height = $(window).scrollTop(); //getting the scrolling height of window
    if (height > 20) {
      $(".header").css({ paddingTop: "0px" });
      $(".header").addClass("anx-mob-bg");
    } else {
      $(".header").css({ paddingTop: "20px" });
      $(".header").removeClass("anx-mob-bg");

      // $(".Annex-header-bg").css({"backgroundColor": "rgba(255, 255, 255, 0.1)"});
    }
  });

  $(".toggle-nav").on("click", function (event) {
    $("html").toggleClass("open");
  });
  $(".nav-bar-nav a").on("click", function (event) {
    $("html").removeClass("open");
  });

  // Add smooth scrolling to all links
  $(".nav-item a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

$(window).on("load", function () {
  // makes sure the whole site is loaded
  $("#status").fadeOut(); // will first fade out the loading animation
  $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
  $("body").delay(350).css({
    overflow: "visible",
  });

  var height = $(window).scrollTop(); //getting the scrolling height of window
  if (height > 100) {
    $(".Annex-header-bg").css({
      borderTopLeftRadius: "0px",
      borderTopRightRadius: "0px",
    });
    $(".header").css({
      paddingTop: "0px",
    });
  } else {
    $(".Annex-header-bg").css({
      borderRadius: "10px",
    });
    $(".header").css({
      paddingTop: "30px",
    });
  }
});

$(document).ready(function () {
  $("select").niceSelect();
});

const liquidityFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

});

function getSavingRow(row, annAPY) {
  return $(`
 
    <div class="col-12 col-md-6 col-xl-4">
        <div class="curency-crd-main" id="saving-${row?.underlyingSymbol?.toLowerCase()}">
            <div class="curecy-crd-img-main">
                <img src="images/tokens/${row?.underlyingSymbol?.toUpperCase()}.${row?.underlyingSymbol?.toUpperCase() === "DOGE" ? "svg" : "png"}" alt="${row?.underlyingSymbol}" style="width: 70px; height: 70px" />
            </div>
            <div class="d-flex align-items-stretch align-items-lg-center flex-column flex-lg-row justify-content-between flex-grow-1">
              <div class="curecy-crd-token-info mb-2 mb-lg-0">
                  <p class="curcy-name text-left mb-1 mg-sm-2">${row?.underlyingName}</p>
                  <p class="currency-p curcy-abbr text-left mb-0">${row?.underlyingSymbol}</p>
              </div>
  
              <div class="currecy-crd-value text-lg-right text-left">
                  <p class="curcy-percent2">${annAPY ? `%${Number(row?.supplyVenusApy)?.toFixed(2)}` : `%${Number(row?.supplyApy)?.toFixed(2)}`}</p>
                  <p class="currency-p curcy-name-rt2">APY</p>
              </div>
            </div>
        </div>
    </div>
  `)
}

function getBorrowRow(row) {

  return $(`
 
    <div class="col-12 col-md-6 col-xl-4">
        <div class="curency-crd-main" id="borrow-${row?.underlyingSymbol?.toLowerCase()}">
            <div class="curecy-crd-img-main">
                <img src="images/tokens/${row?.underlyingSymbol?.toUpperCase()}.${row?.underlyingSymbol?.toUpperCase() === "DOGE" ? "svg" : "png"}" alt="${row?.underlyingSymbol}" style="width: 70px; height: 70px" />
            </div>
            
            <div class="d-flex align-items-stretch align-items-lg-center flex-column flex-lg-row justify-content-between flex-grow-1">
              <div class="curecy-crd-img-main">
                  <div class="curecy-crd-token-info mb-2 mb-lg-0">
                      <p class="curcy-name text-left">${row?.underlyingName}</p>
                      <p class="currency-p curcy-abbr text-left mb-0">${row?.underlyingSymbol}</p>
                  </div>
              </div>
  
              <div class="currecy-crd-value text-lg-right text-left">
                  <p class="curcy-percent">${liquidityFormatter.format(row?.liquidity)}</p>
                  <p class="currency-p curcy-name-rt">Available Liquidity</p>
              </div>
            </div>
        </div>
    </div>
  `)
}

function getStringTheory(rotate = false) {
  return $(`
  <div class="col-12 col-md-6 col-xl-4 ${rotate ? "rotate" : ""} d-none d-xl-block">
      <img src="./images/string-theory.svg" class="string-theory" alt="">
  </div>
`)
}

function getMarketTokenOption(row) {
  return $(`
    <option data-image="images/tokens/${row?.underlyingSymbol?.toUpperCase()}.png" value="${row?.underlyingSymbol}">${row?.underlyingSymbol}</option>
  `)
}

const defaultCoins = {
  BTCB: {
    underlyingSymbol: "BTCB",
    underlyingName: "BTCB",
    supplyVenusApy: 0,
    supplyApy: 0,
    liquidity: 0,
  },
  LTC: {
    underlyingSymbol: "LTC",
    underlyingName: "LiteCoin",
    supplyVenusApy: 0,
    supplyApy: 0,
    liquidity: 0,
  },
  ETH: {
    underlyingSymbol: "ETH",
    underlyingName: "Ethereum",
    supplyVenusApy: 0,
    supplyApy: 0,
    liquidity: 0,
  },
  XRP: {
    underlyingSymbol: "XRP",
    underlyingName: "Ripple",
    supplyVenusApy: 0,
    supplyApy: 0,
    liquidity: 0,
  },
  USDC: {
    underlyingSymbol: "USDC",
    underlyingName: "USD Coin",
    supplyVenusApy: 0,
    supplyApy: 0,
    liquidity: 0,
  },
  XVS: {
    underlyingSymbol: "XVS",
    underlyingName: "Venus",
    supplyVenusApy: 0,
    supplyApy: 0,
    liquidity: 0,
  },
  SXP: {
    underlyingSymbol: "SXP",
    underlyingName: "Swipe",
    supplyVenusApy: 0,
    supplyApy: 0,
    liquidity: 0,
  },
}

const defaultCoinKeys = Object.keys(defaultCoins);

// get data from API
$(function() {
  let viewMoreSaving = false;
  let viewMoreBorrow = false;
  let savingWithANN = false;
  let defaultMarketSelected = "SXP"
  let markets = []

  const savingViewMoreButton = $("#saving-view-more");
  const borrowViewMoreButton = $("#borrowing-view-more");
  const savingRows = $("#saving-rows");
  const borrowRows = $("#borrow-rows");
  const savingAPYSwitch = $("#saving-apy-switch");

  const marketTokensSelect = $("#market-token");
  const marketPrice = $("#market-price");
  const marketTotalSupply = $("#market-total-supply");
  const marketSuppliers = $("#market-suppliers");
  const marketTotalBorrowed = $("#market-total-borrowed");
  const marketBorrowers = $("#market-borrowers");
  const marketTokenAddress = $("#market-selected-token");

  function initialRows(type = 'saving') {
    let container;
    if(type === 'saving') {
      container = savingRows;
    } else {
      container = borrowRows;
    }

    let rows = [];

    for(let i in defaultCoins) {
      let row = defaultCoins[i];


      if(i == defaultCoinKeys.length - 1) {
        rows.push(getStringTheory(true));

        rows.push(type === 'saving' ? getSavingRow(row, savingWithANN) : getBorrowRow(row));

        rows.push(getStringTheory());
      } else {
        rows.push(type === 'saving' ? getSavingRow(row, savingWithANN) : getBorrowRow(row))
      }
    }

    container.html('');
    container.append(...rows);
  }


  function updateSaving(markets) {
    let rows = [];
    let canInsertStringTheory = !viewMoreSaving || markets.length % 3 === 1;

    for(let i in markets) {
      let row = markets[i];
      if(defaultCoinKeys.includes(row?.underlyingSymbol) || viewMoreSaving) {
        rows.push(getSavingRow(row, savingWithANN))
      }
    }

    if(canInsertStringTheory) {
      rows = rows.slice(0, rows.length - 1).concat(getStringTheory(true)).concat(rows.slice(-1)).concat(getStringTheory());
    }
    savingRows.html('');
    savingRows.append(...rows);
  }

  function updateBorrowing(markets) {
    let rows = [];
    let canInsertStringTheory = !viewMoreBorrow || markets.length % 3 === 1;

    for(let i in markets) {
      let row = markets[i];
      if(defaultCoinKeys.includes(row?.underlyingSymbol) || viewMoreBorrow) {
        rows.push(getBorrowRow(row))
      }
    }

    if(canInsertStringTheory) {
      rows = rows.slice(0, rows.length - 1).concat(getStringTheory(true)).concat(rows.slice(-1)).concat(getStringTheory());
    }
    borrowRows.html('');
    borrowRows.append(...rows);
  }

  function updateMarketDetails(markets) {
    let selectedMarket = {};
    for(let i in markets) {
      if(markets[i]?.underlyingSymbol === defaultMarketSelected) {
        selectedMarket = markets[i];
        break;
      }
    }

    if(!('tokenPrice' in selectedMarket)) {
      return false;
    }

    marketPrice.html(liquidityFormatter.format(selectedMarket?.tokenPrice));
    marketTotalSupply.html(liquidityFormatter.format(selectedMarket?.totalSupplyUsd));
    marketSuppliers.html(selectedMarket?.supplierCount);
    marketTotalBorrowed.html(liquidityFormatter.format(selectedMarket?.totalBorrowsUsd));
    marketBorrowers.html(selectedMarket?.borrowerCount);
    marketTokenAddress.html(selectedMarket?.address?.slice(0, 6) + "..." + selectedMarket?.address?.slice(-4));

  }

  const request = $.ajax({
    url: `${apiBaseURL}/governance/venus`
  })

  initialRows('saving');
  initialRows('borrow');

  request.done(function (response) {
    markets = response?.data?.markets;

    updateSaving(markets);

    updateBorrowing(markets);

    updateMarketDetails(markets);


    savingAPYSwitch.on('change', function(e) {
      savingWithANN = !savingWithANN;
      updateSaving(markets);
    })

    savingViewMoreButton.on('click', function(e) {
      e.preventDefault()
      viewMoreSaving = !viewMoreSaving;
      savingViewMoreButton.text(viewMoreSaving ? "View Less" : "View More");
      updateSaving(markets);
    })

    borrowViewMoreButton.on('click', function(e) {
      e.preventDefault()
      viewMoreBorrow = !viewMoreBorrow;
      borrowViewMoreButton.text(viewMoreBorrow ? "View Less" : "View More");
      updateBorrowing(markets);
    })

    marketTokensSelect.on("change", function(e) {
      defaultMarketSelected = e?.target?.value;

      updateMarketDetails(markets);
    })
  })
})
