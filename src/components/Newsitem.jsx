import React, { Component } from "react";

export class Newsitem extends Component {
    render() {
        let { Title, Description, imageurl, url } = this.props;
        return (
            <div>
                <div class="max-w-xs rounded overflow-hidden shadow-lg m-3">
                    <img class="w-full" src={imageurl} alt="image" />
                    <div class="px-3">
                        <div class="font-bold text-xl">{Title}</div>
                        <p class="text-gray-700 text-base">
                            {Description}
                        </p>
                    </div>
                    <a href={url} target="_blank">
                            <button className="p-2 bg-blue-500 hover:bg-blue-700 rounded-lg text-white font-semibold ml-28  my-3
                            ">Read more</button>

                    </a>

                </div>
            </div>
        );
    }
}

export default Newsitem;
