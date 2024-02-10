"use-client";
import React, { Component, RefObject, useEffect, useRef} from 'react';

interface CommentsProps {}


export function CommentComponent() {
    const commentBox = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let scriptEl = document.createElement("script");
        scriptEl.setAttribute("src", "https://utteranc.es/client.js")
        scriptEl.setAttribute("crossorigin", "anonymous")
        scriptEl.setAttribute("async", "true")
        scriptEl.setAttribute("repo", "zedis04/experimental")
        scriptEl.setAttribute("issue-term", "title")
        scriptEl.setAttribute("theme", "github-light")
        if (commentBox.current) {
            commentBox.current.appendChild(scriptEl);
        }

        console.log('in efffect')
    }, [])

    return (
        <div style={{ width: '100%' }} id="comments">
            <div ref={commentBox}></div>
        </div>
    );

}

class Comments extends Component<CommentsProps> {
    private commentBox: RefObject<HTMLDivElement>;

    constructor(props: CommentsProps) {
        super(props);
        this.commentBox = React.createRef();
    }

    componentDidMount() {
        let scriptEl = document.createElement("script");
        scriptEl.setAttribute("src", "https://utteranc.es/client.js")
        scriptEl.setAttribute("crossorigin", "anonymous")
        scriptEl.setAttribute("async", "true")
        scriptEl.setAttribute("repo", "zedis04/experimental")
        scriptEl.setAttribute("issue-term", "title")
        scriptEl.setAttribute("theme", "github-light")
        if (this.commentBox.current) {
            this.commentBox.current.appendChild(scriptEl);
        }
    }

    render() {
        return (
            <div style={{ width: '100%' }} id="comments">
                <div ref={this.commentBox}></div>
            </div>
        );
    }
}

export default Comments;
