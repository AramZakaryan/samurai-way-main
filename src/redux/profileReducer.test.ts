import { profileReducer, addPost, deletePost } from "./profileReducer" // Replace 'yourReducerFile' with the actual file name
import { ProfileActionsType, ProfilePageDataType } from "./types" // Assuming you have defined this type

let initialState: ProfilePageDataType
beforeEach(() => {
  initialState = {
    postsData: [
      { id: 1, title: "Hi, How are you?", likesCount: 0 },
      { id: 2, title: "It's my first post", likesCount: 23 },
      { id: 3, title: "It's  post", likesCount: 13 },
    ],
    userProfile: null,
    postTextAreaEnteringValue: "",
    status: null,
  }
})

it("New post should be added", () => {
  const newPostBody: string = "Test post"
  const action: ProfileActionsType = addPost(newPostBody)

  const ResultState = profileReducer(initialState, action)

  expect(ResultState.postsData.length).toEqual(initialState.postsData.length + 1)
  expect(ResultState.postsData[initialState.postsData.length].title).toEqual(newPostBody)
  expect(ResultState.postsData[initialState.postsData.length].likesCount).toEqual(0)
})

it("Post should be correctly deleted", () => {
  const postId: number = 3
  const action = deletePost(postId)

  const ResultState = profileReducer(initialState, action)

  expect(ResultState.postsData.length).toEqual(initialState.postsData.length - 1)
  expect(ResultState.postsData[0]).toEqual(initialState.postsData[0])
  expect(ResultState.postsData[1]).toEqual(initialState.postsData[1])
})

it("Post should not be deleted if id does not exist", () => {
  const postId: number = 113
  const action = deletePost(postId)

  const ResultState = profileReducer(initialState, action)

  expect(ResultState.postsData.length).toEqual(initialState.postsData.length)
  expect(ResultState.postsData[0]).toEqual(initialState.postsData[0])
  expect(ResultState.postsData[1]).toEqual(initialState.postsData[1])
  expect(ResultState.postsData[2]).toEqual(initialState.postsData[2])
})
