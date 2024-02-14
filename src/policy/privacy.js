import { Typography, Row, Col } from 'antd'

function Privacy() {
  return (
    <Typography component='div' style={{'height': '100vh', 'overflow': 'auto'}}>
        <Row type='flex' justify='center' style={{'margin': '20px'}}>
            <Col span={20}>
                <Typography.Title level={2}>
                    PRIVACY POLICY
                </Typography.Title>

                <Typography.Paragraph>
                    Last updated: February 9, 2024
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    INTRODUCTION
                </Typography.Title>

                <Typography.Paragraph>
                    Welcome to MailMergeX ("MailMergeX", "we", "us", or "our"). MailMergeX is committed to protecting your privacy and ensuring that your personal information is handled safely and responsibly. This Privacy Policy ("Policy") explains how we collect, use, and disclose your personal information when you use our services, including our website at https://mailmergex.com ("Website") and any related services, features, and content (collectively, the "Services").
                </Typography.Paragraph>

                <Typography.Paragraph>
                    By accessing or using our Services, you agree to the terms of this Policy. If you do not agree with the terms of this Policy, please do not use our Services.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    INFORMATION WE COLLECT
                </Typography.Title>

                <Typography.Paragraph>
                    We may collect personal information that you provide to us when you use our Services, such as your name, email address, and any other information you choose to provide.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    We may also automatically collect certain information when you access or use our Services, including your browser type, referring URL, and other usage information.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    HOW WE USE YOUR INFORMATION
                </Typography.Title>

                <Typography.Paragraph>
                    We use the information we collect to provide, maintain, and improve our Services, to communicate with you, to personalize your experience, and to comply with legal obligations.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    SHARING YOUR INFORMATION
                </Typography.Title>

                <Typography.Paragraph>
                    We may share your information as required by law or to protect our rights or the rights of others.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    YOUR CHOICES
                </Typography.Title>

                <Typography.Paragraph>
                    You may update, correct, or delete your account information at any time by contacting us. You may also opt out of receiving promotional communications from us by following the instructions in those communications or by contacting us.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    CHILDREN'S PRIVACY
                </Typography.Title>

                <Typography.Paragraph>
                    Our Services are not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can take appropriate action.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    CHANGES TO THIS POLICY
                </Typography.Title>

                <Typography.Paragraph>
                    We may update this Policy from time to time to reflect changes in our practices and services. We will notify you of any changes by posting the new Policy on this page. We encourage you to review this Policy periodically for any changes.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    CONTACT US
                </Typography.Title>

                <Typography.Paragraph>
                    If you have any questions about this Policy, please contact the developer at samebashirkorede@gmail.com.
                </Typography.Paragraph>

            </Col>
        </Row>
    </Typography>
  );
}

export default Privacy
