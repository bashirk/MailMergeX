import React from 'react'

import appLogo from '../images/amplichat.png'

import appleStoreBadge from '../images/apple_store_badge.svg'
import googlePlayBadge from '../images/google_play_badge.png'

import coverImage from '../images/appbannerweb.png'

// endorsement images
import dreamhub_filled from '../images/dreamhub_filled.png'
import voiceqna_filled from '../images/voiceqna_fill_v2_gradient.png'
import voicemirror_filled from '../images/voice_mirror_v_1024.png'


// section images
import guitar from '../images/guitar.jpg'
import event_phones from '../images/event_phones.jpeg'
import foggy_blue from '../images/foggy_blue.jpg'
import purple_phones from '../images/purple_phones.png'
import purple_light from '../images/purple_light.jpg'
import concert_classic from '../images/concert_classic.jpg'

import discordImage from '../images/discord.png'

export const initialState = {
    // when in dev, change appURL to local url
    // appURL: 'http://localhost:3000',  
    // when in production, change appURL to real url
    appURL: 'https://mail-merge-x.vercel.app',

    appLogo: appLogo,
    appName: 'MailMergeX',

    coverTitle: 'MailMergeX: Simplify Your Email Campaigns with Ease',
    coverText: 'Effortlessly Send Personalized Emails from Google Workspace™ apps like Sheets™, Docs™, and Slides™.',
    appleStoreBadge: appleStoreBadge,
    appleStoreLink: 'https://apps.apple.com/us/app/amplichat/id1499570373',
    googlePlayBadge: googlePlayBadge,
    googlePlayLink: 'https://apps.apple.com/us/app/amplichat/id1499570373',

    coverImage: coverImage,

    endorsementTitle: `Join satisfied users who have transformed their email campaigns`,
    endorsementText: `From small businesses to large enterprises, MailMergeX is trusted by organizations of all sizes to simplify their email marketing effort. MailMergeX powers interactions for these companies.`,
    endorsementList: [
        {
            title: `TVCLabs`,
            titleColor: `orangeRed`,
            image: dreamhub_filled,
            URL: `https://tvcng.com`,
        },
        {
            title: `No Code Labs`,
            titleColor: `forestGreen`,
            image: voiceqna_filled,
            URL: `#`,
        },
        {
            title: `The Merge Company`,
            titleColor: `blue`,
            image: voicemirror_filled,
            URL: `#`,
        },
    ],

    sectionList: [
        {
            'title': `Welcome to MailMergeX: Your Email Campaign Solution`,
            'text': `MailMergeX is the ultimate solution for simplifying your email campaigns directly from your Google Sheets™. With MailMergeX, you can effortlessly send personalized emails to your contacts, saving time and maximizing efficiency.`,
            'image': guitar,
        },
        {
            'title': `Streamline Your Workflow`,
            'text': `Say goodbye to limited mailing tools and manual email merges, and say hello to streamlined workflows. MailMergeX seamlessly integrates with Google Sheets™, allowing you to send personalized emails directly from your spreadsheet. Spend less time on repetitive tasks and more time focusing on what matters most – building meaningful connections with your audience.`,
            'image': event_phones,
        },
        {
            'title': `Personalization Made Easy`,
            'text': `Personalization is key to effective communication. With MailMergeX, you can easily personalize each email with custom fields such as name, email address, and more. Whether you're reaching out to clients, customers, or colleagues, MailMergeX empowers you to create engaging, personalized messages in seconds. From sales campaigns to newsletters, MailMergeX helps you get more done in less time, so you can focus on growing your business.`,
            'image': foggy_blue,
        },
        {
            'title': `Track Your Success`,
            'text': `Track the success of your email campaigns with MailMergeX's built-in analytics. Monitor open rates, click-through rates, and more to gain valuable insights into your audience's engagement. With MailMergeX, you'll have the data you need to optimize your campaigns and drive better results.`,
            'image': purple_phones,
        },
        {
            'title': `Secure and Reliable`,
            'text': `Rest easy knowing your data is secure with MailMergeX. Our add-on is built with industry-leading security measures to protect your sensitive information. Plus, our reliable infrastructure ensures that your emails are delivered promptly and securely every time.`,
            'image': purple_light,
        },
        {
            'title': `Get Started Today`,
            'text': `Ready to take your email campaigns to the next level? Get started with MailMergeX today and discover the power of personalized email marketing. With our easy-to-use add-on, you'll be sending professional-looking emails in no time. Try MailMergeX now and see the difference it can make for your business.`,
            'image': concert_classic,
        },
    ],

    discordImage: discordImage,
    discordLink: 'mailto:samebashirkorede@gmail.com',
}

const initialContext = {
    state: initialState,
    dispatch: () => null,
}

export const Context = React.createContext(initialContext)
