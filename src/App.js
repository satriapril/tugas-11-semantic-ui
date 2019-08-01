import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import { List, Loader, Dimmer, Placeholder, Segment,
          Grid, Divider, Header, Icon, Search, Button, Image} from "semantic-ui-react";

class App extends Component {
  render(){
    return(
      <div>
      <Divider/>
      <br/>

      <Segment placeholder>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Header icon>
                <Icon name='search' />
                Cari document
              </Header>

              <Search placeholder='Search document...' />
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name='pdf file outline' />
                Tambah Document Baru
              </Header>
              <Button primary>Create Document</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment>
        <Dimmer active>
          <Loader />
        </Dimmer>

        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment>
      <br/>

      <Grid columns={3} stackable>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column>
            <List>
              <List.Content>
                <List.Header as="h3">Website Terkait</List.Header>
              </List.Content>
              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href='http://www.google.com'>Google</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href='http://www.facebook.com'>Facebook</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href='http://www.semantic-ui.com'>Semantic UI</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href='http://www.niomic.com'>Niomic</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href='http://www.reactjs.org'>React</a>
                </List.Content>
              </List.Item>
            </List>
        </Grid.Column>
      </Grid>
      </div>
    );
  }
}
export default App;
