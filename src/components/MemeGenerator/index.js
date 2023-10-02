import {Component} from 'react'
import {
  MainHeading,
  InputText,
  LabelText,
  DropDown,
  MainContainer,
  FormContainer,
  GenerateButton,
  DropDownList,
  ImageContainer,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    isShowImage: false,
    imageUrl: '',
    topText: '',
    bottomText: '',
    font: fontSizesOptionsList[0].displayText,
  }

  onChangeUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFont = event => {
    this.setState({font: event.target.value})
  }

  onSubmitGenerate = event => {
    event.preventDefault()
    this.setState({isShowImage: true})
  }

  render() {
    const {isShowImage, imageUrl, topText, bottomText, font} = this.state
    return (
      <>
        <MainContainer>
          <FormContainer onSubmit={this.onSubmitGenerate}>
            <MainHeading>Meme Generator</MainHeading>
            <LabelText>Image URL</LabelText>
            <InputText
              type="text"
              placeholder="Enter the Image Url"
              onChange={this.onChangeUrl}
              value={imageUrl}
            />
            <LabelText>Top Text</LabelText>
            <InputText
              type="text"
              placeholder="Enter the Top Text"
              onChange={this.onChangeTopText}
              value={topText}
            />
            <LabelText>Bottom Text</LabelText>
            <InputText
              type="text"
              placeholder="Enter the Bottom Text"
              onChange={this.onChangeBottomText}
              value={bottomText}
            />
            <LabelText>Font Size</LabelText>
            <DropDown onChange={this.onChangeFont}>
              {fontSizesOptionsList.map(each => (
                <DropDownList key={each.optionId}>
                  {each.displayText}
                </DropDownList>
              ))}
            </DropDown>
            <GenerateButton type="submit">Generate</GenerateButton>
          </FormContainer>
          {isShowImage && (
            <ImageContainer bgImage={imageUrl} data-testid="meme">
              <Text fontSize={font}>{topText}</Text>
              <Text fontSize={font}>{bottomText}</Text>
            </ImageContainer>
          )}
        </MainContainer>
      </>
    )
  }
}
export default MemeGenerator
