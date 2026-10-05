export default function ContactForm(){
    return(
        <div>
            <h1 className="uppercase">
                Get in touch
            </h1>
            <div>
                <form action="">
                    <input type="text" placeholder="name" />
                    <input type="email" placeholder="email"/>
                    <input type="text" placeholder="subject"/>
                    <textarea name="" id="" placeholder="message"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}