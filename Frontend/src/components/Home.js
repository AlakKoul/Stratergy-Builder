import React from 'react'
import '../styles/Home.css'
export const Home = () => {
    const show = ()=>{
        const divId = document.querySelector('#hide');
        divId.style.display = 'block';
    }
  return (
      <>
    <div className="">
    <h3>Select Products</h3>
    <p>Exchange</p>
    <select name="options-exchange" id="exchange">
        <option value="nse" selected>NSE</option>
        <option value="bse_currency">BSE Currency</option>
        <option value="mcx">MCX</option>
        <option value="nse_currency">NSE Currency</option>
    </select>
    <p>Ticker</p>
    <select name="options-ticker" id="ticker">
    <option value="ABB">ABB</option>
<option value="ABBOTINDIA">ABBOTINDIA</option>
<option value="ABCAPITAL">ABCAPITAL</option>
<option value="AARTIIND">AARTIIND</option>
<option value="ABFRL">ABFRL</option>
<option value="ACC">ACC</option>
<option value="ADANIENT">ADANIENT</option>
<option value="ADANIPORTS">ADANIPORTS</option>
<option value="ALKEM">ALKEM</option>
<option value="AMARAJABAT">AMARAJABAT</option>
<option value= "AMBUJACEM">AMBUJACEM</option>
<option value="APLLTD">APLLTD</option>
<option value="APOLLOHOSP">APOLLOHOSP</option>
<option value="APOLLOTYRE">APOLLOTYRE</option>
<option value="ASHOKLEY">ASHOKLEY</option>
<option value="ASIANPAINT">ASIANPAINT</option>
<option value="ASTRAL">ASTRAL</option>
<option value="ATUL">ATUL</option>
<option value="AUBANK">AUBANK</option>
<option value="AUROPHARMA">AUROPHARMA</option>
<option value="AXISBANK">AXISBANK</option>
<option value="BAJAJ-AUTO">BAJAJ-AUTO</option>
<option value="BAJAJFINSV">BAJAJFINSV</option>
<option value="BAJFINANCE">BAJFINANCE</option>
<option value="BALKRISIND">BALKRISIND</option>
<option value="BALRAMCHIN">BALRAMCHIN</option>
<option value="BANDHANBNK">BANDHANBNK</option>
<option value="BANKBARODA">BANKBARODA</option>
<option value="BANKEX">BANKEX</option>
<option value="BANKNIFTY">BANKNIFTY</option>
<option value="BATAINDIA">BATAINDIA</option>
<option value="BEL">BEL</option>
<option value="BERGEPAINT">BERGEPAINT</option>
<option value="BHARATFORG">BHARATFORG</option>
<option value="BHARTIARTL">BHARTIARTL</option>
<option value="BHEL">BHEL</option>
<option value="BIOCON">BIOCON</option>
<option value="BOSCHLTD">BOSCHLTD</option>
<option value="BPCL">BPCL</option>
<option value="BRITANNIA">BRITANNIA</option>
<option value="BSOFT">BSOFT</option>
<option value="CADILAHC">CADILAHC</option>
<option value="CANBK">CANBK</option>
<option value="CANFINHOME">CANFINHOME</option>
<option value="CHAMBLFERT">CHAMBLFERT</option>
<option value="CHOLAFIN">CHOLAFIN</option>
<option value="CIPLA">CIPLA</option>
<option value="COALINDIA">COALINDIA</option>
<option value="COFORGE">COFORGE</option>
<option value="COLPAL">COLPAL</option>
<option value="CONCOR">CONCOR</option>
<option value="COROMANDEL">COROMANDEL</option>
<option value="CROMPTON">CROMPTON</option>
<option value="CUB">CUB</option>
<option value="CUMMINSIND">CUMMINSIND</option>
<option value="DABUR">DABUR</option>
<option value="DALBHARAT">DALBHARAT</option>
<option value="DEEPAKNTR">DEEPAKNTR</option>
<option value="DELTACORP">DELTACORP</option>
<option value="DIVISLAB">DIVISLAB</option>
<option value="DIXON">DIXON</option>
<option value="DLF">DLF</option>
<option value="DRREDDY">DRREDDY</option>
<option value="EICHERMOT">EICHERMOT</option>
<option value="ESCORTS">ESCORTS</option>
<option value="EXIDEIND">EXIDEIND</option>
<option value="FEDERALBNK">FEDERALBNK</option>
<option value="FINNIFTY">FINNIFTY</option>
<option value="FSL">FSL</option>
<option value="GAIL">GAIL</option>
<option value="GLENMARK">GLENMARK</option>
<option value="GMRINFRA">GMRINFRA</option>
<option value="GNFC">GNFC</option>
<option value="GODREJCP">GODREJCP</option>
<option value= "GODREJPROP">GODREJPROP</option>
<option value=    "GRANULES">GRANULES</option>
<option value="GRASIM">GRASIM</option>
<option value="GSPL">GSPL</option>
<option value="GUJGASLTD">GUJGASLTD</option>
<option value="HAL">HAL</option>
<option value="HAVELLS">HAVELLS</option>
<option value="HCLTECH">HCLTECH</option>
<option value="HDFC">HDFC</option>
<option value="HDFCAMC">HDFCAMC</option>
<option value="HDFCBANK">HDFCBANK</option>
<option value=  "HDFCLIFE">HDFCLIFE</option>
<option value="HEROMOTOCO">HEROMOTOCO</option>
<option value="HINDALCO">HINDALCO</option>
<option value="HINDCOPPER">HINDCOPPER</option>
<option value="HINDPETRO">HINDPETRO</option>
<option value="HINDUNILVR">HINDUNILVR</option>
<option value="HONAUT">HONAUT</option>
<option value="IBULHSGFIN">IBULHSGFIN</option>
<option value="ICICIBANK">ICICIBANK</option>
<option value="ICICIGI">ICICIGI</option>
<option value="ICICIPRULI">ICICIPRULI</option>
<option value="IDEA">IDEA</option>
<option value="IDFC">IDFC</option>
<option value="IDFCFIRSTB">IDFCFIRSTB</option>
<option value="IEX">IEX</option>
<option value="IGL">IGL</option>
<option value="INDHOTEL">INDHOTEL</option>
<option value="INDIACEM">INDIACEM</option>
<option value="INDIAMART">INDIAMART</option>
<option value="INDIGO">INDIGO</option>
<option value="INDUSINDBK">INDUSINDBK</option>
<option value="INDUSTOWER">INDUSTOWER</option>
<option value="INFY">INFY</option>
<option value="INTELLECT">INTELLECT</option>
<option value="IOC">IOC</option>
<option value="IPCALAB">IPCALAB</option>
<option value="IRCTC">IRCTC</option>
<option value="ITC">ITC</option>
<option value="JINDALSTEL">JINDALSTEL</option>
<option value="JKCEMENT">JKCEMENT</option>
<option value="JSWSTEEL">JSWSTEEL</option>
<option value="JUBLFOOD">JUBLFOOD</option>
<option value="KOTAKBANK">KOTAKBANK</option>
<option value="L&amp;TFH">L&amp;TFH</option>
<option value="LALPATHLAB">LALPATHLAB</option>
<option value="LAURUSLABS">LAURUSLABS</option>
<option value="LICHSGFIN">LICHSGFIN</option>
<option value="LT">LT</option>
<option value="LTI">LTI</option>
<option value="LTTS">LTTS</option>
<option value="LUPIN">LUPIN</option>
<option value="M&amp;M">M&amp;M</option>
<option value="M&amp;MFIN">M&amp;MFIN</option>
<option value="MANAPPURAM">MANAPPURAM</option>
<option value="MARICO">MARICO</option>
<option value="MARUTI">MARUTI</option>
<option value="MCDOWELL-N">MCDOWELL-N</option>
<option value="MCX">MCX</option>
<option value="METROPOLIS">METROPOLIS</option>
<option value="MFSL">MFSL</option>
<option value="MGL">MGL</option>
<option value="MIDCPNIFTY">MIDCPNIFTY</option>
<option value="MINDTREE">MINDTREE</option>
<option value="MOTHERSUMI">MOTHERSUMI</option>
<option value="MPHASIS">MPHASIS</option>
<option value="MRF">MRF</option>
<option value="MUTHOOTFIN">MUTHOOTFIN</option>
<option value="NAM-INDIA">NAM-INDIA</option>
<option value="NATIONALUM">NATIONALUM</option>
<option value="NAUKRI">NAUKRI</option>
<option value="NAVINFLUOR">NAVINFLUOR</option>
<option value="NBCC">NBCC</option>
<option value="NESTLEIND">NESTLEIND</option>
<option value="NIFTY">NIFTY</option>
<option value="NMDC">NMDC</option>
<option value="NTPC">NTPC</option>
<option value="OBEROIRLTY">OBEROIRLTY</option>
<option value="OFSS">OFSS</option>
<option value="ONGC">ONGC</option>
<option value="PAGEIND">PAGEIND</option>
<option value="PEL">PEL</option>
<option value="PERSISTENT">PERSISTENT</option>
<option value="PETRONET">PETRONET</option>
<option value="PFC">PFC</option>
<option value="PFIZER">PFIZER</option>
<option value="PIDILITIND">PIDILITIND</option>
<option value="PIIND">PIIND</option>
<option value="PNB">PNB</option>
<option value="POLYCAB">POLYCAB</option>
<option value="POWERGRID">POWERGRID</option>
<option value="PVR">PVR</option>
<option value="RAIN">RAIN</option>
<option value="RAMCOCEM">RAMCOCEM</option>
<option value="RBLBANK">RBLBANK</option>
<option value="RECLTD">RECLTD</option>
<option value="RELIANCE">RELIANCE</option>
<option value="SAIL">SAIL</option>
<option value="SBICARD">SBICARD</option>
<option value="SBILIFE">SBILIFE</option>
<option value="SBIN">SBIN</option>
<option value="SENSEX">SENSEX</option>
<option value="SENSEX50">SENSEX50</option>
<option value="SHREECEM">SHREECEM</option>
<option value="SIEMENS">SIEMENS</option>
<option value="SRF">SRF</option>
<option value="SRTRANSFIN">SRTRANSFIN</option>
<option value="STAR">STAR</option>
<option value="SUNPHARMA">SUNPHARMA</option>
<option value="SUNTV">SUNTV</option>
<option value="SX40">SX40</option>
<option value="SYNGENE">SYNGENE</option>
<option value="TATACHEM">TATACHEM</option>
<option value="TATACOMM">TATACOMM</option>
<option value="TATACONSUM">TATACONSUM</option>
<option value="TATAMOTORS">TATAMOTORS</option>
<option value="TATAPOWER">TATAPOWER</option>
<option value="TATASTEEL">TATASTEEL</option>
<option value="TCS">TCS</option>
<option value="TECHM">TECHM</option>
<option value="TITAN">TITAN</option>
<option value="TORNTPHARM">TORNTPHARM</option>
<option value="TORNTPOWER">TORNTPOWER</option>
<option value="TRENT">TRENT</option>
<option value="TVSMOTOR">TVSMOTOR</option>
<option value="UBL">UBL</option>
<option value="ULTRACEMCO">ULTRACEMCO</option>
<option value="UPL">UPL</option>
<option value="VEDL">VEDL</option>
<option value="VOLTAS">VOLTAS</option>
<option value="WHIRLPOOL">WHIRLPOOL</option>
<option value="WIPRO">WIPRO</option>
<option value="ZEEL">ZEEL</option>

    </select>
    </div>
      <button onClick={show}>Next</button>
      
      <div id="hide">
          <h4>Upcoming</h4>
      </div>
      </>
  )
}


