import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
    articles = [
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Credit Suisse meets to weigh options, under pressure to merge with UBS - Reuters.com",
        "description": "Credit Suisse Group AG <a href=\"https://www.reuters.com/companies/CSGN.S\" target=\"_blank\">(CSGN.S)</a> began a make-or-break weekend after some rivals grew cautious in their dealings with the bank as regulators urged it to pursue a deal with Swiss rival UBS A…",
        "url": "https://www.reuters.com/business/finance/credit-suisse-meets-weigh-options-under-pressure-merge-with-ubs-2023-03-18/",
        "urlToImage": "https://www.reuters.com/resizer/x-cgODGGu4ZsmG7NqyKJ_9Ge8_8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/34WKFZGX3BJOTB7YI7GFKUTYSU.jpg",
        "publishedAt": "2023-03-18T06:59:00Z",
        "content": "March 18 (Reuters) - Credit Suisse Group AG (CSGN.S) began a make-or-break weekend after some rivals grew cautious in their dealings with the bank as regulators urged it to pursue a deal with Swiss r… [+4036 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "KRCRTV.COM"
        },
        "author": "Adam Robinson",
        "title": "Mysterious lights streak over the Northstate, explained - KRCR",
        "description": "Hundreds of residents throughout Shasta County have reported seeing mysterious lights streaking across the Northstate on Friday night.",
        "url": "https://krcrtv.com/news/local/mysterious-lights-streak-over-the-northstate",
        "urlToImage": "https://krcrtv.com/resources/media/7f26f6c7-07b7-4236-a991-ed17318b1a4d-large16x9_JamieFinchDirectUploader18thMar202304_47UTC.jpeg?1679115923519",
        "publishedAt": "2023-03-18T05:10:00Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "YouTube"
        },
        "author": null,
        "title": "Penny Hardaway Throws Water Bottle After Game-Winner - Bleacher Report",
        "description": "Penny Hardaway couldn't believe how Memphis got knocked out of #marchmadness Subscribe: https://www.youtube.com/user/BleacherReport?sub_confirmation=1Follow ...",
        "url": "https://www.youtube.com/watch?v=LMEAzZXOahQ",
        "urlToImage": "https://i.ytimg.com/vi/LMEAzZXOahQ/maxresdefault.jpg",
        "publishedAt": "2023-03-18T04:20:40Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "Variety"
        },
        "author": "Ellise Shafer",
        "title": "Taylor Swift Eras Tour Setlist: All the Songs From the Glendale Show - Variety",
        "description": "Are you ready for it? Taylor Swift’s Eras Tour is finally here. The 52-date trek kicks off Friday night in Glendale, Ariz., at State Farm Stadium with openers Gayle and Paramore. This marks S…",
        "url": "https://variety.com/2023/music/news/taylor-swift-eras-tour-setlist-1235552488/",
        "urlToImage": "https://variety.com/wp-content/uploads/2022/11/GettyImages-1350327539.jpg?w=1000&h=563&crop=1",
        "publishedAt": "2023-03-18T04:02:00Z",
        "content": "Are you ready for it? Taylor Swift’s Eras Tour is finally here.\r\nThe 52-date trek kicks off Friday night in Glendale, Ariz., at State Farm Stadium with openers Gayle and Paramore. This marks Swift’s … [+2099 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MarketWatch"
        },
        "author": "Emily Bary, , Bill Peters",
        "title": "First Republic Bank's debt cut to junk by Moody's - MarketWatch",
        "description": "First Republic faces ‘significant challenges,’ Moody’s says; First Republic stock ended more than 30% lower on Friday",
        "url": "https://www.marketwatch.com/story/first-republic-bank-gets-downgrade-to-junk-from-moodys-6d95c54f",
        "urlToImage": "https://images.mktw.net/im-744719/social",
        "publishedAt": "2023-03-18T03:26:00Z",
        "content": "Moodys Investors Service downgraded its credit rating on First Republic Bank to junk late Friday, citing a deterioration in the banks financial profile.The downgrade reflects the deterioration in the… [+1833 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Dark Horizons"
        },
        "author": "Garth Franklin",
        "title": "\"Resident Evil 4\" Remake Scores Raves - Dark Horizons",
        "description": "Just as Capcom’s remake of “Resident Evil 2” had the highest aggregate score of any 2019 game release on Metacritic, it looks as though the upcoming “Resident Evil 4” could well do the same this year. Praise for this new take on the game franchise’s most accl…",
        "url": "https://www.darkhorizons.com/resident-evil-4-remake-scores-raves/",
        "urlToImage": "https://cdndh.darkhorizons.com/wp-content/uploads/2023/03/resident-evil-4-remake-scores-raves.jpg",
        "publishedAt": "2023-03-18T02:07:46Z",
        "content": "Just as Capcom’s remake of “Resident Evil 2” had the highest aggregate score of any 2019 game release on Metacritic, it looks as though the upcoming “Resident Evil 4” could well do the same this year… [+1675 chars]"
        },
        {
        "source": {
        "id": "entertainment-weekly",
        "name": "Entertainment Weekly"
        },
        "author": "Devan Coggan",
        "title": "The 'Shazam! Fury of the Gods' post-credits scenes, explained - Entertainment Weekly News",
        "description": "What’s up with that caterpillar?",
        "url": "https://ew.com/movies/shazam-fury-of-the-gods-post-credits-scenes-explained/",
        "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B1000%2C559%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F03%2F11%2FSHAZAM-FURY-OF-THE-GODS-01-031123.jpg",
        "publishedAt": "2023-03-18T01:30:00Z",
        "content": "Warning: This story contains spoilers about Shazam! Fury of the Gods.\r\nZachary Levi is suiting up again.\r\nThe actor returns as teenager-turned-superhero Billy Batson in Shazam! Fury of the Gods, the … [+4141 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "NBC Southern California"
        },
        "author": "Jonathan Lloyd",
        "title": "21-Year-Old Long Beach Soldier Found Dead at Fort Hood in Texas - NBC Southern California",
        "description": "Pvt. Ana Basaldua Ruiz from Long Beach died this week at Fort Hood, the same Texas Army base where 20-year-old soldier Vanessa Guillén was murdered nearly…",
        "url": "https://www.nbclosangeles.com/news/local/20-year-old-long-beach-soldier-found-dead-at-fort-hood-in-texas/3117048/",
        "urlToImage": "https://media.nbclosangeles.com/2023/03/Ana-Basalduaruiz-fort-hood-march-17-2023.jpg?quality=85&strip=all&resize=1200%2C675",
        "publishedAt": "2023-03-18T01:22:12Z",
        "content": "A 21-year-old soldier from Long Beach died this week at Fort Hood, the same Texas Army base where 20-year-old soldier Vanessa Guillén was murdered nearly three years ago.\r\nPvt. Ana Basaldua Ruiz, a c… [+3153 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "France pension protests: Crowd clashes with police over government reform by decree - BBC",
        "description": "A second night of unrest grips France after the government pushed through pension changes without a vote.",
        "url": "https://www.bbc.com/news/world-europe-64997414",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6B96/production/_129024572_gettyimages-1474222241.jpg",
        "publishedAt": "2023-03-18T01:08:42Z",
        "content": "Media caption, Watch: Violence erupts in Paris as pension protests continue\r\nProtesters have clashed with police again in central Paris over the French government's pension reforms.\r\nThousands of dem… [+2062 chars]"
        },
        {
        "source": {
        "id": "the-hill",
        "name": "The Hill"
        },
        "author": "Ellen Mitchell",
        "title": "Finland, but not Sweden, step closer to joining NATO - The Hill",
        "description": "Welcome to The Hill’s Defense & NatSec newsletter {beacon} Defense &National Security Defense &National Security   The Big Story  Finland, but not Sweden, takes step closer to joining NATO Turkish President Recep Tayyip Erdoğan said his nation’s parliament wi…",
        "url": "https://thehill.com/newsletters/defense-national-security/3906107-finland-but-not-sweden-step-closer-to-joining-nato/",
        "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2022/08/nato_finland_sweden_080922gn_w.jpg?w=1280",
        "publishedAt": "2023-03-18T01:08:00Z",
        "content": "Erdoğan announced the news at a press conference in Ankara on Friday with Finnish President Sauli Niinistö after the two leaders met for bilateral talks in the Turkish capital.\r\n“When it comes to ful… [+1476 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Caitlin Hu",
        "title": "Russia scoffs but Putin could stand trial for alleged war crimes, ICC chief prosecutor says - CNN",
        "description": "The International Criminal Court's chief prosecutor believes Russian President Vladimir Putin could stand trial for alleged crimes committed during Russia's war in Ukraine, he told CNN on Friday, despite Moscow's arguments that it is not subject to the court'…",
        "url": "https://www.cnn.com/2023/03/17/americas/icc-karim-khan-putin-war-crimes-intl/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230317194933-karim-khan-talks-to-clarissa-ward-031723.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-03-18T01:03:00Z",
        "content": "The International Criminal Courts chief prosecutor believes Russian President Vladimir Putin could stand trial for alleged crimes committed during Russias war in Ukraine, he told CNN on Friday, despi… [+5613 chars]"
        },
        {
        "source": {
        "id": "fox-news",
        "name": "Fox News"
        },
        "author": "Melissa Rudy",
        "title": "Rare tick-borne babesiosis disease on the rise in northeastern US, says CDC: Here's why - Fox News",
        "description": "The CDC reported that cases of babesiosis, a parasitic disease spread by infected ticks, saw a significant uptick between 2011 and 2019 in some northeastern states.",
        "url": "https://www.foxnews.com/health/rare-tick-borne-babesiosis-disease-on-the-rise-in-northeastern-us-says-cdc-heres-why",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/tick-on-leaf.jpg",
        "publishedAt": "2023-03-18T00:47:00Z",
        "content": "Lyme disease may hold the distinction of being the most commonly reported tick-borne disease in the U.S. but its not the only one. \r\nBabesiosis, a rare tick-borne parasitic disease, is spiking in som… [+5174 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Space.com"
        },
        "author": "Mike Wall",
        "title": "SpaceX launches 2 rockets less than 5 hours apart - Space.com",
        "description": "The two orbital missions lifted off on Friday (March 17) at 3:26 p.m. ET and 7:38 p.m. ET.",
        "url": "https://www.space.com/spacex-launch-doubleheader-march-2023",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/ryEFWAB7J2DvRm9BxhVSbE-1200-80.jpeg",
        "publishedAt": "2023-03-18T00:41:50Z",
        "content": "SpaceX pulled off a St. Patrick's Day doubleheader, acing two orbital missions on Friday (March 17).\r\nThe show began at 3:26 p.m. EDT (1926 GMT), when SpaceX launched 52 of its Starlink internet sate… [+2314 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ESPN Australia"
        },
        "author": "Alden Gonzalez",
        "title": "Mexico's Benji Gil says quick WBC turnaround to face Puerto Rico a 'disadvantage' - ESPN Australia",
        "description": "Mexico manager Benji Gil lamented the quick turnaround his team endured in traveling to Miami for its quarterfinal against Puerto Rico in this year's World Baseball Classic after navigating the pool-play portion of the tourney nearly 2,500 miles away.",
        "url": "https://www.espn.com.au/mlb/story/_/id/35883591/mexico-benji-gil-says-quick-wbc-turnaround-face-puerto-rico-disadvantage",
        "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0318%2Fr1146230_1296x729_16%2D9.jpg",
        "publishedAt": "2023-03-18T00:37:34Z",
        "content": "MIAMI -- Mexico's manager, Benji Gil, said he doesn't believe his team should be playing until Saturday. Its quarterfinal game against Puerto Rico in this year's World Baseball Classic instead took p… [+2629 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "YouTube"
        },
        "author": null,
        "title": "Interviewed 2 weeks before his death, Lance Reddick talks about his career, John Wick films - ABC7",
        "description": "Lance Reddick, the versatile actor known for his roles in the acclaimed TV series \"The Wire\" and the blockbuster \"John Wick\" movie franchise, died Friday, hi...",
        "url": "https://www.youtube.com/watch?v=f4nxK7JlY_s",
        "urlToImage": "https://i.ytimg.com/vi/f4nxK7JlY_s/maxresdefault.jpg",
        "publishedAt": "2023-03-18T00:00:24Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "PBS"
        },
        "author": null,
        "title": "How an international arrest warrant for Putin puts a new spin on Xi visit to Russia - PBS NewsHour",
        "description": "Hours after Friday's announcement of the trip, an international arrest warrant was issued for Putin on war crimes charges, taking at least some wind out of the sails of China's big reveal.",
        "url": "https://www.pbs.org/newshour/world/how-an-international-arrest-warrant-for-putin-puts-a-new-spin-on-xi-visit-to-russia",
        "urlToImage": "https://d3i6fh83elv35t.cloudfront.net/static/2023/03/2022-02-04T000000Z_1670769130_RC2XCS97E6BB_RTRMADP_3_OLYMPICS-2022-PUTIN-1024x676.jpg",
        "publishedAt": "2023-03-17T23:18:37Z",
        "content": "WASHINGTON (AP) Chinese President Xi Jinpings plans to meet with Russian President Vladimir Putin in Moscow next week highlighted Chinas aspirations for a greater role on the world stage. But they al… [+7573 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "YouTube"
        },
        "author": null,
        "title": "LAUSD strike looms as resolution fails to be reached - KCAL News",
        "description": "A potentially crippling strike by service workers that would shut down Los Angeles Unified School District campuses for three days was looming large Friday, ...",
        "url": "https://www.youtube.com/watch?v=STykk8tt29w",
        "urlToImage": "https://i.ytimg.com/vi/STykk8tt29w/maxresdefault.jpg",
        "publishedAt": "2023-03-17T23:18:11Z",
        "content": null
        },
        {
        "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
        },
        "author": "Al Jazeera",
        "title": "Over 100 Trump presidential gifts unaccounted for: US Democrats - Al Jazeera English",
        "description": "Legislators say Trump family didn’t disclose $250,000 in gifts from foreign governments received while in White House.",
        "url": "https://www.aljazeera.com/news/2023/3/17/over-100trump-family-presidential-gifts-unaccounted-for-house-us-democrats",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/03/AP22300708548233.jpg?resize=1920%2C1356",
        "publishedAt": "2023-03-17T22:27:45Z",
        "content": "A golden golf club from Japan and swords from Saudi Arabias royal family were among the gifts that legislators in the United States say the family of former President Donald Trump failed to disclose … [+2477 chars]"
        },
        {
        "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
        },
        "author": "Christine Hall",
        "title": "Daily Crunch: With just $2.2B in remaining liquidity, SVB’s parent company files for bankruptcy - TechCrunch",
        "description": "Hello, friends, and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.",
        "url": "https://techcrunch.com/2023/03/17/daily-crunch-with-just-2-2b-in-remaining-liquidity-svbs-parent-company-files-for-bankruptcy/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1472616136.jpg?resize=1200,813",
        "publishedAt": "2023-03-17T22:11:59Z",
        "content": "To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PDT, subscribe here.\r\nHappy Friday Crunch!\r\nTheres a persistent theory in hardware that … [+3899 chars]"
        },
        {
        "source": {
        "id": "cbs-news",
        "name": "CBS News"
        },
        "author": "Cara Tabachnick",
        "title": "Family of Stephen Smith, who was found dead not far from Murdaugh home, raises money for exhumation and autopsy - CBS News",
        "description": "The investigation into Smith's 2015 death was reopened after authorities said they found new evidence during the investigation into the murders of Maggie and Paul Murdaugh.",
        "url": "https://www.cbsnews.com/news/stephen-smith-body-to-be-exhumed-family-fundraiser-investigation-reopened-after-murdaugh-trial/",
        "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/03/17/51431009-3571-4173-807e-c7ae2b537fbf/thumbnail/1200x630/bf7dcaec882c4d15990ac6a288d126a5/screen-shot-2023-03-17-at-3-47-54-pm.png",
        "publishedAt": "2023-03-17T21:32:35Z",
        "content": "The body of Stephen Smith, who died on a country road not far from the Murdaugh home, is to be exhumed, his family announced on Friday. \r\nOn March 9, his mother, Sandy Smith, opened a GoFundMe page t… [+2395 chars]"
        }
        ]

    constructor(){
        super()
        console.log("hello im a newsitem component");
        this.state = {
            articles : this.articles,
            loading : false
        }
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsBucket - Top Headlines</h2>
        <div className="row">
            <div className="col-md-4">
                <Newsitem title = 'NewsData' description = "fghjk " imageUrl = "https://media.nbclosangeles.com/2023/03/Ana-Basalduaruiz-fort-hood-march-17-2023.jpg?quality=85&strip=all&resize=1200%2C675" newsId= 'todo'/>
            </div>
            <div className="col-md-4">
                <Newsitem title = 'NewsData' description = "fghjk "/>
            </div>
            <div className="col-md-4">
                <Newsitem title = 'NewsData' description = "fghjk "/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <Newsitem title = 'NewsData' description = "fghjk "/>
            </div>
            <div className="col-md-4">
                <Newsitem title = 'NewsData' description = "fghjk "/>
            </div>
            <div className="col-md-4">
                <Newsitem title = 'NewsData' description = "fghjk "/>
            </div>
        </div>
      </div>
    )
  }
}
