import React from 'react'
import {useRouter} from "next/router"

function username() {

    const router = useRouter()
    const {username} = router.query
  return (
    <div>Hello {username}!</div>
  )
}

export default username