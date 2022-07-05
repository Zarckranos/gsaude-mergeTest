import React from 'react'
import { Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import {
  Container
} from './styles'

const { width, height } = Dimensions.get('screen')

const PDFView = () => {
  const route = useRoute()
  return (
    // <Container>
      <WebView
        // source={{ uri: 'https://bula.vercel.app/pdf?id=eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxNDQ1NDUyOCIsIm5iZiI6MTY1MzU3NDk4MSwiZXhwIjoxNjUzNTc1MjgxfQ.enE3lEFFtvkTdxuPoyZU3kQMQ4FIWK7xqQ1PqqwRF6eoSmxWNuqJ4BY_sW-HWadCg_MkUgzA7T58ZjIVU5O70Q' }}
        source={{uri:`https://www.bulario.com/${route.params?.medicine}/`}}
        // style={{ marginTop: 20 }}
      />
    // </Container>
  )
}

export default PDFView