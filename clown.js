'use strict';

const CLOWN_OPTION_COUNT = 3;

waitForTimelineReady();

function randInt(max) {
	return Math.floor(Math.random() * max);
}

async function waitForSeconds(seconds) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 1000 * seconds);
	});
}

async function waitForTimelineReady() {
	while (true) {
		var timelineContainer = document.querySelector('div[aria-label="Timeline: Your Home Timeline"]');
		if (!timelineContainer) {
			// If the timeline is not ready, wait a second and then try again.
			await waitForSeconds(1);
			continue;
		}
		// Make the post.
		createClownPost(timelineContainer.firstElementChild.firstElementChild);
		break;
	}
	
}

function createClownPost(timelineContainer) {
	var clownPostContainer = document.createElement('div'),
		profilePicURL = chrome.runtime.getURL('images/1f921_512.png'),
		clownImageNum = randInt(CLOWN_OPTION_COUNT),
		clownImageURL = chrome.runtime.getURL(`images/clowns/clown${clownImageNum}.jpg`);

	clownPostContainer.innerHTML = `
		<div class="css-1dbjc4n r-1ila09b r-qklmqi r-1adg3ll">
			<article aria-haspopup="false" role="article" data-focusable="true" tabindex="0" class="css-1dbjc4n r-1uaug3w r-1loqt21 r-1udh08x r-o7ynqc r-1j63xyz">
				<div class="css-1dbjc4n r-1j3t67a">
					<div class="css-1dbjc4n r-18u37iz r-thb0q2">
						<div class="css-1dbjc4n r-1iusvr4 r-16y2uox r-5f2r5o r-m611by">
						</div>
					</div>
					<div class="css-1dbjc4n r-18u37iz r-thb0q2" data-testid="tweet">
						<div class="css-1dbjc4n r-1awozwy r-18kxxzh r-5f2r5o" style="flex-basis: 49px;">
							<div class="css-1dbjc4n r-18kxxzh r-1wbh5a2 r-13qz1uu">
								<div class="css-1dbjc4n r-1wbh5a2 r-dnmrzs">
									<a aria-haspopup="false" href="#" role="link" data-focusable="true" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-sdzlij r-1loqt21 r-1adg3ll r-ahm1il r-1udh08x r-o7ynqc r-6416eg r-13qz1uu">
										<div class="css-1dbjc4n r-1adg3ll r-1udh08x">
											<div class="r-1adg3ll r-13qz1uu" style="padding-bottom: 100%;">
											</div>
											<div class="r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu">
												<div class="css-1dbjc4n r-sdzlij r-1p0dtai r-1mlwlqe r-1d2f490 r-1udh08x r-u8s1d r-zchlnj r-ipm5af r-417010">
													<div class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style="background-image: url(&quot;${profilePicURL}&quot;);">
													</div>
													<img alt="" draggable="true" src="${profilePicURL}" class="css-9pa8cd">
												</div>
											</div>
										</div>
										<div aria-haspopup="false" class="css-1dbjc4n r-1twgtwe r-sdzlij r-rs99b7 r-1p0dtai r-1mi75qu r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"></div>
									</a>
								</div>
							</div>
						</div>
						<div class="css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-5f2r5o r-1mi0q7o">
							<div class="css-1dbjc4n r-zl2h9q">
								<div class="css-1dbjc4n r-1habvwh r-18u37iz r-1wtj0ep">
									<div class="css-1dbjc4n r-1d09ksm r-18u37iz r-1wbh5a2">
										<div class="css-1dbjc4n r-1wbh5a2 r-dnmrzs">
											<a aria-haspopup="false" href="#" role="link" data-focusable="true" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-1wbh5a2 r-dnmrzs r-1ny4l3l">
												<div class="css-1dbjc4n r-1awozwy r-18u37iz r-1wbh5a2 r-dnmrzs r-1ny4l3l">
													<div class="css-1dbjc4n r-1awozwy r-18u37iz r-dnmrzs">
														<div dir="auto" class="css-901oao css-bfa6kz r-jwli3a r-1qd0xha r-a023e6 r-vw2c0b r-ad9z0x r-bcqeeo r-3s2u2q r-qvutc0">
															<span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">
																<span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">Angry Clown</span>
															</span>
														</div>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="css-1dbjc4n r-156q2ks">
								<div class="css-1dbjc4n r-1udh08x">
									<div class="css-1dbjc4n r-18bvks7 r-t23y2h r-1phboty r-rs99b7 r-1udh08x">
										<div class="css-1dbjc4n r-1adg3ll r-1udh08x">
											<div class="r-1adg3ll r-13qz1uu" style="padding-bottom: 66.6667%;"></div>
											
											<div class="r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu">
												<div aria-label="An angry clown." class="css-1dbjc4n r-1p0dtai r-1mlwlqe r-1d2f490 r-11wrixw r-61z16t r-1udh08x r-u8s1d r-zchlnj r-ipm5af r-417010">
													<div class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style="background-image: url(&quot;${clownImageURL}&quot;); background-size: cover; background-position: center;"></div>
													<img alt="AN angry clown." draggable="true" src="${clownImageURL}" class="css-9pa8cd">
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>	
						</div>
					</div>
				</div>
			</article>
		</div>`;

	timelineContainer.insertAdjacentElement('afterbegin', clownPostContainer);
}