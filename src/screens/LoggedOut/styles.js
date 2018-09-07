import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

export default styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        // backgroundColor: colors.green01,
    },
    welcomeWrapper: {
        flex: 1,
        display: 'flex',
        // marginTop: 30,
        padding: 20,
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 40,
        marginBottom: 30,
    },
    welcomeText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40,
    },
    facebookButtonIcon: {
        color: colors.green01,
        position: 'relative',
        left: 30,
        zIndex: 8,
        alignSelf: 'center',
    },
    icons: {
        color: colors.white,
        position: 'absolute',
        left: 20,
        top: 15,
    },
    moreOptions: {
        marginTop: 15,
    },
    moreOptionsButtonText: {
        color: colors.white,
        fontSize: 16,
    },
    loginOption: {
        position: 'absolute',
        right: 20,
        top: 15,
    },
    loginOptionButtonText: {
        color: colors.white,
        fontWeight: '400',
        fontSize: 18,
    },
    termsAndConditions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30,
    },
    termsText: {
        color: colors.white,
        fontSize: 13,
        fontWeight: '600',
    },
    linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
    },
});