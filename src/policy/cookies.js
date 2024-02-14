import { Typography, Row, Col } from 'antd'

function Cookies() {
  return (
    <Typography component='div' style={{'height': '100vh', 'overflow': 'auto'}}>
        <Row type='flex' justify='center' style={{'margin': '20px'}}>
            <Col span={20}>
                <Typography.Title level={2}>
                    COOKIE POLICY
                </Typography.Title>

                <Typography.Paragraph>
                    Last updated: February 11, 2024
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    AGREEMENT TO COOKIE POLICY
                </Typography.Title>

                <Typography.Paragraph>
                    This Cookie Policy explains how MailMergeX ("Company", "we", "us", and "our") uses cookies and similar technologies to enhance your experience when you visit our website at https://mailmergex.com ("Website"). By accessing or using our Website, you agree to be bound by this Cookie Policy.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    In some cases, we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    What are cookies?
                </Typography.Title>

                <Typography.Paragraph>
                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work more efficiently and to provide reporting information.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    Cookies set by the website owner (in this case, MailMergeX) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    Why do we use cookies?
                </Typography.Title>

                <Typography.Paragraph>
                    We use cookies for several reasons. Some cookies are required for technical reasons to enable our Website to operate. Other cookies allow us to track and target the interests of our users to enhance the experience on our Website. Third parties may also serve cookies through our Website for advertising, analytics, and other purposes.
                </Typography.Paragraph>

                {/* Add more content here as needed */}

                <Typography.Title level={3}>
                    How can I control cookies?
                </Typography.Title>

                <Typography.Paragraph>
                    You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit http://www.aboutads.info/choices/ or http://www.youronlinechoices.com.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    The specific types of first and third-party cookies served through our Website and the purposes they perform are described in the table below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    Essential website cookies:
                </Typography.Title>

                <Typography.Paragraph>
                    These cookies are strictly necessary to provide you with services available through our Websites and to use some of its features, such as access to secure areas.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    Name: userInformation
                </Typography.Paragraph>

                <Typography.Paragraph>
                    Purpose: Used to help users keep track of their user information to navigate across all functionality of the website.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    Provider: mailmergex.com
                </Typography.Paragraph>

                <Typography.Paragraph>
                    Country: United States
                </Typography.Paragraph>

                <Typography.Paragraph>
                    Type: http_cookie
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    What about other tracking technologies, like web beacons?
                </Typography.Title>

                <Typography.Paragraph>
                    Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enables us to recognize when someone has visited our Websites or opened an e-mail including them. This allows us, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of e-mail marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    Do you use Flash cookies or Local Shared Objects?
                </Typography.Title>

                <Typography.Paragraph>
                    Websites may also use so-called "Flash Cookies" (also known as Local Shared Objects or "LSOs") to, among other things, collect and store information about your use of our services, fraud prevention, and for other site operations.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the Website Storage Settings Panel. You can also control Flash Cookies by going to the Global Storage Settings Panel and following the instructions (which may include instructions that explain, for example, how to delete existing Flash Cookies (referred to "information" on the Macromedia site), how to prevent Flash LSOs from being placed on your computer without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are not being delivered by the operator of the page you are on at the time).
                </Typography.Paragraph>

                <Typography.Paragraph>
                    Please note that setting the Flash Player to restrict or limit the acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    Do you serve targeted advertising?
                </Typography.Title>

                <Typography.Paragraph>
                    Third parties may serve cookies on your computer or mobile device to serve advertising through our Websites. These companies may use information about your visits to this and other websites to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. This can be accomplished by them using cookies or web beacons to collect information about your visits to this and other sites to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details, or other details that directly identify you unless you choose to provide these.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    How often will you update this Cookie Policy?
                </Typography.Title>

                <Typography.Paragraph>
                    We may update this Cookie Policy from time to time to reflect changes in our practices and service offerings. We encourage you to review this Cookie Policy periodically for any changes. The date at the top of this Cookie Policy indicates when it was last updated.
                </Typography.Paragraph>

            </Col>
        </Row>
    </Typography>
  );
}

export default Cookies
