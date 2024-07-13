import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    articles = []
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }

    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=61803f41ab7f49cda204ef4a3a76ca9b&page=1&pageSize=20`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, totalarticles: parsedData.totalResults })
    }
    handleNext = async () => {
        
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=61803f41ab7f49cda204ef4a3a76ca9b&page=${this.state.page + 1}&pageSize=20`
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({ articles: parsedData.articles })
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })

    }
    handlePrev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=61803f41ab7f49cda204ef4a3a76ca9b&page=${this.state.page - 1}&pageSize=20`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })

    }
    render() {
        return (
            <>
                <div className='flex flex-wrap ml-16'>
                    {this.state.articles.map((Element) => {
                        return <div key={Element.url}>
                            <Newsitem Title={Element.title ? Element.title : " "} Description={Element.description ? Element.description.slice(0, 118) : " "} imageurl={Element.urlToImage} url={Element.url} />
                        </div>

                    })}


                </div>
                <div className='flex justify-between'>

                    <button disabled={this.state.page <= 1} onClick={this.handlePrev} className="justify-item-start p-2 bg-black hover:bg-blue-700 rounded-lg text-white font-semibold my-3 ml-20
                            ">Previous</button>



                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} onClick={this.handleNext} className="justify-item-end p-2 bg-black hover:bg-blue-700 rounded-lg text-white font-semibold  my-3 mr-20
                            ">Next</button>


                </div>
            </>

        )
    }
}

export default News
