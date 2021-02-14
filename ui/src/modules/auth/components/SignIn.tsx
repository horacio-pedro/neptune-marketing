import FormControl from 'modules/common/components/form/Control';
import Form from 'modules/common/components/form/Form';
import FormGroup from 'modules/common/components/form/Group';
import { IButtonMutateProps } from 'modules/common/types';
import { __ } from 'modules/common/utils';
import React from 'react';
import { Link } from 'react-router-dom';
import { AuthBox, Links } from '../styles';

type Props = {
  renderButton: (props: IButtonMutateProps) => JSX.Element;
};

class SignIn extends React.Component<Props> {
  renderContent = formProps => {
    const { values, isSubmitted } = formProps;

    return (
      <>
        <FormGroup>
          <FormControl
            {...formProps}
            name="email"
            placeholder={__('exemplo@email.com')}
            required={true}
          />
        </FormGroup>

        <FormGroup>
          <FormControl
            {...formProps}
            name="password"
            type="password"
            placeholder={__('palavra-passe')}
            required={true}
          />
        </FormGroup>

        {this.props.renderButton({
          values,
          isSubmitted
        })}
      </>
    );
  };

  render() {
    return (
      <AuthBox>
        <h2>{__('Bem-vindo')}</h2>
        <Form renderContent={this.renderContent} />
        <Links>
          <Link to="/forgot-password">{__('Esqueceu a password?')}</Link>
        </Links>
      </AuthBox>
    );
  }
}

export default SignIn;
