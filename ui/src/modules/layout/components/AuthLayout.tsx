import Button from 'modules/common/components/Button';
import { __, bustIframe } from 'modules/common/utils';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {
  AuthContent,
  AuthDescription,
  Authlayout,
  CenterContent,
  MobileRecommend
} from '../styles';

type Props = {
  content: React.ReactNode;
  description?: React.ReactNode;
  col?: { first: number; second: number };
};

class AuthLayout extends React.Component<Props, {}> {
  renderContent(desciption: string, link: string) {
    return (
      <MobileRecommend>
        <CenterContent>
          <div>
            <b>{__('neptune Inc')}</b>
            <div>{__(desciption)}</div>
          </div>
          <Button btnStyle="link" size="small" href={link}>
            {__('Get')}
          </Button>
        </CenterContent>
      </MobileRecommend>
    );
  }

  renderRecommendMobileVersion() {
    const { userAgent } = navigator;

    if (userAgent.indexOf('Mobile') !== -1) {
      if (userAgent.match(/Android/i)) {
        return this.renderContent(
          'Download android app for free on the Google play',
          'https://play.google.com/store/apps/details?id=io.erxes.erxes_android&fbclid=IwAR1bVPBSE0pC_KUNNjOJQA4upb1AuTUfqFcDaHTHTptyke7rNvuvb2mgwb0'
        );
      }
    }

    return null;
  }

  renderDesciption() {
    const { description } = this.props;

    if (description) {
      return (
        <>
          <img src="/images/logo.png" alt="neptune" />
          {description}
        </>
      );
    }

    return (
      <>
        <img src="/images/logo.png" alt="neptune" />
        <h1>{__('Plataforma de Marketing de Crescimento')}</h1>
        <p>
          {__(
            'Marketing, projetos e vendas. Plataforma de gestão projetado para ajudar o seu negócio a atrair mais clientes'
          )}
        </p>
        <a href={__('https://www.conexoesinfinito.com')}>
          « {__('Voltar a página inicial')}
        </a>
      </>
    );
  }

  componentDidMount() {
    // click-jack attack defense
    bustIframe();
  }

  render() {
    const { content, col = { first: 6, second: 5 } } = this.props;

    return (
      <Authlayout className="auth-container">
        <AuthContent>
          <Container>
            <Col md={col.first}>
              <AuthDescription>{this.renderDesciption()}</AuthDescription>
            </Col>
            <Col md={{ span: col.second, offset: 1 }}>{content}</Col>
          </Container>
        </AuthContent>
        {this.renderRecommendMobileVersion()}
      </Authlayout>
    );
  }
}

export default AuthLayout;
