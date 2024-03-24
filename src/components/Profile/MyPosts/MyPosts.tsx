import React, { ChangeEvent } from "react"
import S from "./MyPosts.module.css"
import { Post } from "./Posts/Posts"
import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { validateMaxLength, validateRequiredField } from "utils/validators/validators"
import { CustomTextarea } from "components/FormControls/CustomFields"

type FormDataType = {
  newPostBody: string
}

const validateMaxLength10 = validateMaxLength(10)

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={CustomTextarea}
          name={"newPostBody"}
          placeholder={"Type your post here!"}
          validate={[validateRequiredField, validateMaxLength10]}
        />
      </div>
      <div>
        <button type={"submit"}>Add Post</button>
      </div>
    </form>
  )
}

const AddPostReduxForm = reduxForm<FormDataType>({ form: "profileAddMessageForm" })(AddPostForm)

export type MyPostsPropsType = {
  profilePageData: {
    postsData: {
      id: number
      title: string
      likesCount: number
    }[]
  }
  addPost: (newPostBody: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  let posts = props.profilePageData.postsData.map((pst) => (
    <Post key={pst.id} message={pst.title} likesCount={pst.likesCount} />
  ))

  const addNewPostHandler = (data: FormDataType) => {
    props.addPost(data.newPostBody)
  }

  return (
    <div className={S.PostsBlock}>
      <h3>My Posts</h3>
      <div>
        <AddPostReduxForm onSubmit={addNewPostHandler} />
      </div>
      <div className={S.posts}>{posts}</div>
    </div>
  )
}
