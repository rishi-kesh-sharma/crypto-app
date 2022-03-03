
import {fetchBaseQuery,createApi} from "@reduxjs/toolkit/query/react"
const cryptoNewsHeaders={
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '81aa7d822cmshb0729c974728650p1c6157jsn7165c35127cc'
  }
const baseUrl='https://bing-news-search1.p.rapidapi.com';
const createRequest=(url)=>({url,headers:cryptoNewsHeaders})
export const cryptoNewsApi=createApi({
    reducerPath:"cryptoNewsApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:({newsCategory,count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const{

    useGetCryptoNewsQuery,
}=cryptoNewsApi