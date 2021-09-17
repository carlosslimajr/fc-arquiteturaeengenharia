import Button from 'components/Button'
import React from 'react'
import { BlogWrapper, Background } from './styles'
import Image from 'next/image'
const Blog = () => {
  return (
    <>
      <Background />
      <BlogWrapper>
        <div className="container content">
          <div className="leftside">
            <div className="blogImage">
              <Image
                src="/blog.png"
                alt="Foto do Blog Athan"
                height="376px"
                width="392px"
                className="imagi"
              />
            </div>
          </div>
          <aside>
            <h3>Blog</h3>
            <p>
              Quer conhecer mais sobre tecnologia, design business e diversos
              assuntos?
            </p>

            <Button
              color="#ffffff"
              height="6rem"
              width="20.4rem"
              background="#FF7433"
            >
              Quero conhecer
            </Button>
          </aside>
        </div>
      </BlogWrapper>
    </>
  )
}

export default Blog
