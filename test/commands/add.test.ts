import {expect, test} from '@oclif/test'

function tick(timeInMS = 0): Promise<any> {
  return new Promise(resolve => {
    setTimeout(resolve, timeInMS)
  })
}

describe('add', () => {
  test
    .stdout()
    .command(['add'])
    .it('runs add', (ctx, done) => {
      tick(1000)
      tick(1000)
      tick(1000)
      expect(ctx.stdout).to.contain('NewFeature component created successfully')
      done()
    })

  test
    .stdout({print: true})
    .command(['add', '--name', 'CoolFeature'])
    .it('runs add --name=CoolFeature', (ctx, done) => {
      tick(1000)
      expect(ctx.stdout).to.contain('CoolFeature component created successfully')
      done()
    })

  test
    .stdout({print: true})
    .command(['add', '--name', 'JSFeature'])
    .it('runs add --name=JSFeature --format=jsx', (ctx, done) => {
      tick(1000)
      expect(ctx.stdout).to.contain('JSFeature component created successfully')
      done()
    })
})
