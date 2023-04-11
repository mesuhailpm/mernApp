import PostMessage from "../models/postMessage.js"
export const getPosts = async (req,res)=>{
    try {
        // res.send('This Worked')
        const postMessages = await PostMessage.find()
        res.status(200).json(postMessages)
    } catch (error) {
        console.log(error)

    }

}
export const createPost =async (req,res)=>{
        const post = req.body
        const newPost = new postMessage(post)
        try {
            await newPost.save()
            res.send('Post created')
        } catch (error) {

        }


}
