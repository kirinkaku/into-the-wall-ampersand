const request = require('request')
const fs = require('fs')
const https = require('https')
const path = require('path')
const ProgressBar = require('progress')
const inquirer = require('inquirer')
const { firstQuestions, nextQuestions, } = require('./questions')
const replace = require('replace-in-file');

const {
  extract 
} = require('article-parser');

const html2md=require('html-to-md')
 
const article = require('article');

//npm i -g replace-in-file

//const url = 'https://www.price.com.hk/news/2020/01/06/12/%E5%B0%87%E6%90%AD%E8%BC%891%E5%84%84%E5%83%8F%E7%B4%A0%E9%8F%A1%E9%A0%AD%E5%B0%8F%E7%B1%B3-10-%E9%8F%A1%E9%A0%AD%E8%A6%8F%E6%A0%BC%E6%9B%9D%E5%85%89';
//const url = 'https://www.hk01.com/%E7%A4%BE%E6%9C%83%E6%96%B0%E8%81%9E/418426/%E6%AD%A6%E6%BC%A2%E8%82%BA%E7%82%8E-%E9%A3%9F%E8%A1%9E%E5%B1%80%E5%85%A8%E9%80%9F%E4%BF%AE%E4%BE%8B%E7%B4%8D%E5%85%A5%E6%B3%95%E5%AE%9A%E9%A0%88%E5%91%88%E5%A0%B1%E5%82%B3%E6%9F%93%E7%97%85-%E6%9C%AC%E5%91%A8%E5%85%A7%E5%88%8A%E6%86%B2';
const url = 'http://www.globaltimes.cn/content/1164106.shtml'
 
extract(url).then((article) => {
  console.log(article);
  console.log(html2md(article.content,{skipTags:['div', 'span']}))
}).catch((err) => {
  console.log(err);
});


var source = 'http://en.wikipedia.org/wiki/Fish';

// The image url will be resolved from the `source` url
/*
request(url).pipe(article(source, function (err, result) {
  if (err) throw err;
  console.log(result);
  // result = {
  //  title: String,
  //  text: String,
  //  image: String or null
  // };
}));
*/

console.log(html2md('<div>        <div><span><a href="https://www.hk01.com/tag/27872"><span>武漢肺炎</span></a>            </span><span><a href="https://www.hk01.com/tag/7147"><span>肺部疾病</span></a>            </span><span><a href="https://www.hk01.com/tag/1213"><span>武漢</span></a>            </span><span><a href="https://www.hk01.com/tag/14422"><span>傳染病</span></a>            </span><span><a href="https://www.hk01.com/tag/12920"><span>陳肇始</span></a>            </span>        </div>    </div>'
,{skipTags:['span','div']}))
