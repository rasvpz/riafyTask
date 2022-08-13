const mongoose = require('mongoose');
const { Schema } = mongoose;

const store = new Schema({
        Name:String,
        currentMarketPrice:String,
        marketCap:String,
        stockPE:String,
        dividendYield:String,
        ROCE:String,
        ROEPreviousAnnum:String,
        DebtToEquity:String,
        EPS:String,
        Reserves:String,
        Debt:String,

}
);

const companyModel = mongoose.model('store', store);
module.exports = companyModel