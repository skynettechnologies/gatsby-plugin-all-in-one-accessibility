const path = require('path')
const fs = require('fs')

const pathToPublic = path.resolve(pathToProject, 'public')
const fileNames = fs.readdirSync(pathToPublic)

const indexFilePath = path.resolve(pathToPublic, 'index.html')

const appJsFileName = fileNames.find((fileName) => fileName.startsWith('app-') && fileName.endsWith('.js'))
if (!appJsFileName) {
  throw Error('Could not find app-*.js filename')
}
const appJsFilePath = path.resolve(pathToPublic, appJsFileName)

const appJsMapFileName = fileNames.find((fileName) => fileName.startsWith('app-') && fileName.endsWith('.js.map'))
if (!appJsMapFileName) {
  throw Error('Could not find app-*.js.map filename')
}
const appJsMapFilePath = path.resolve(pathToPublic, appJsMapFileName)

describe('Code is there', function () {
  it('has snippet in the <head>', function () {
    const indexText = fs.readFileSync(indexFilePath).toString()
    const indexOfHeadOpen = indexText.indexOf('<head>')
    const indexOfHeadClose = indexText.indexOf('</head>')
    const indexOfFirstThing = indexText.indexOf('analytics._writeKey="ADD_API_KEY_PROD";')
    expect(indexOfFirstThing).to.be.gt(indexOfHeadOpen)
    expect(indexOfFirstThing).to.be.lt(indexOfHeadClose)

    expect(indexText).to.include('analytics._writeKey="ADD_API_KEY_PROD";')
    expect(indexText).to.include("gatsbySegmentLoad('ADD_API_KEY_PROD');")
    expect(indexText).to.include('analytics.SNIPPET_VERSION="4.15.3"')
    expect(indexText).to.include('analytics.page();')

    const indexOfLastThing = indexText.indexOf('analytics.page();')
    expect(indexOfLastThing).to.be.gt(indexOfHeadOpen)
    expect(indexOfLastThing).to.be.lt(indexOfHeadClose)
  })

  it('has segment code in app-*.js', function () {
    const jsText = fs.readFileSync(appJsFilePath).toString()
    expect(jsText).to.include('window.gatsbyPluginSegmentLoader(')
  })

  it('has segment code in app-*.js.map', function () {
    const jsMapText = fs.readFileSync(appJsMapFilePath).toString()
    expect(
      compactString(jsMapText)
    )
    .to.include(
      compactString(
        String.raw` function trackPageFn() {\n    var alreadyDelayedBy = `
      )
    )
  })
})


function compactString(str) {
  return str.replace(/\\n/g,'').replace(/\s+/g,'')
}