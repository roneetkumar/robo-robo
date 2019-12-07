import React, { Component } from "react";
import PostImage from "./PostImage";
import PostContent from "./PostContent";

export default class About extends Component {

    state = {
        post: [
            {
                img: "https://static.wixstatic.com/media/17ad0f_59a84e2f57d84f61bb5e7e16c3b92ce2~mv2.jpg/v1/fill/w_312,h_315,fp_0.50_0.50,lg_1,q_80/17ad0f_59a84e2f57d84f61bb5e7e16c3b92ce2~mv2.webp",
                content: {
                    h1: "About Academie Avenir",
                    h4: "Come Learn With Us",
                    p: "Montreal Academie Avenir is a robotic education institution，we introduced this program to Montreal in 2015.It is all about having fun while constructing robots and structures.A child can choose to work either alone or with another child to design, build and program(using a computer) a robot that will perform a number of tasks by following lessons and activities with guidance.Montreal Academie Avenir Classroom teaches children to apply math and science concepts to research, design, build and program autonomous robots as well as improves children's creativity, logic skills and imagination."
                }
            }, {
                img: "https://static.wixstatic.com/media/17ad0f_59a84e2f57d84f61bb5e7e16c3b92ce2~mv2.jpg/v1/fill/w_312,h_315,fp_0.50_0.50,lg_1,q_80/17ad0f_59a84e2f57d84f61bb5e7e16c3b92ce2~mv2.webp",
                content: {
                    h1: "",
                    h4: "",
                    p: "Montreal Academie Avenir is a robotic education institution，we introduced this program to Montreal in 2015.It is all about having fun while constructing robots and structures.A child can choose to work either alone or with another child to design, build and program(using a computer) a robot that will perform a number of tasks by following lessons and activities with guidance.Montreal Academie Avenir Classroom teaches children to apply math and science concepts to research, design, build and program autonomous robots as well as improves children's creativity, logic skills and imagination."
                }
            }
        ]
    }


    render() {
        return (
            <div>
                {
                    this.state.post.map(ele => <div><PostImage img={ele.img} />
                        <PostContent>
                            <h1>{ele.content.h1}</h1>
                            <h4>{ele.content.h4}</h4>
                            <p>{ele.content.p}</p>
                        </PostContent></div>
                    )
                }
            </div>
        )
    }
}
