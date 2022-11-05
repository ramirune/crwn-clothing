import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
} from './button.styles';

export const BUTTON_TYPES_CLASSES = {
	base: BaseButton,
	google: GoogleSignInButton,
	inverted: InvertedButton,
};

// const getButton = (buttonType = 'base') =>
// 	({
// 		base: BaseButton,
// 		google: GoogleSignInButton,
// 		inverted: InvertedButton,
// 	}[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
	switch (buttonType) {
		case BUTTON_TYPES_CLASSES.google:
			return (
				<GoogleSignInButton {...otherProps}>{children}</GoogleSignInButton>
			);
		case BUTTON_TYPES_CLASSES.inverted:
			return <InvertedButton {...otherProps}>{children}</InvertedButton>;
		default:
			return <BaseButton {...otherProps}>{children}</BaseButton>;
	}
};

export default Button;
