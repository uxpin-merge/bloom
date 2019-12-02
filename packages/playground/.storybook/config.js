import { configure } from '@storybook/react';
import '@appearhere/bloom/dist/bloom.css';

function loadStories() {
  require('../stories/Animate.story.js');
  require('../stories/AreaUnits.story.js');
  require('../stories/AutoComplete.story.js');
  require('../stories/Badge.story.js');
  require('../stories/BookingRequestPreview.story.js');
  require('../stories/Btn.story.js');
  require('../stories/BtnContainer.story.js');
  require('../stories/BtnGroup.story.js');
  require('../stories/CalendarItem.story.js');
  require('../stories/CalendarMonth.story.js');
  require('../stories/Cards.story.js');
  require('../stories/Carousel.story.js');
  require('../stories/MobileCarousel.story.js');
  require('../stories/Checkbox.story.js');
  require('../stories/CheckboxGroup.story.js');
  require('../stories/CollapsibleRow.story.js');
  require('../stories/CollapsibleProgressSteps.story.js');
  require('../stories/DayPicker.story.js');
  require('../stories/DayRange.story.js');
  require('../stories/DayRangePicker.story.js');
  require('../stories/DismissablePanel.story.js');
  require('../stories/Dropdown.story.js');
  require('../stories/Figure.story.js');
  require('../stories/FittedImage.story.js');
  require('../stories/FloatingActionBtn.story.js');
  require('../stories/FormComponents.story.js');
  require('../stories/FunnelInputField.story.js');
  require('../stories/GridFader.story.js');
  require('../stories/HeartBtn.story.js');
  require('../stories/Hero.story.js');
  require('../stories/HorizontalOverflowBar.story.js');
  require('../stories/Icon.story.js');
  require('../stories/IconInput.story.js');
  require('../stories/IndicatorGroup.story.js');
  require('../stories/Input.story.js');
  require('../stories/InputField.story.js');
  require('../stories/InputRange.story.js');
  require('../stories/LeftRight.story.js');
  require('../stories/Link.story.js');
  require('../stories/Loader.story.js');
  // require('../stories/Map.story.js');
  require('../stories/Markdown.story.js');
  // require('../stories/Marker.story.js');
  require('../stories/Medallion.story.js');
  require('../stories/Modal.story.js');
  require('../stories/Moment.story.js');
  require('../stories/Notification.story.js');
  require('../stories/OptionCard.story.js');
  require('../stories/Pagination.story.js');
  require('../stories/Panel.story.js');
  require('../stories/ParallaxContainer.story.js');
  require('../stories/PhotoGrid.story.js');
  require('../stories/ProgressSteps.story.js');
  require('../stories/Radio.story.js');
  require('../stories/RadioGroup.story.js');
  require('../stories/ScreenReadable.story.js');
  require('../stories/Select.story.js');
  require('../stories/SiblingTransition.story.js');
  require('../stories/SignPost.story.js');
  require('../stories/SocialLinks.story.js');
  require('../stories/SpaceTypeIcon.story.js');
  require('../stories/Star.story.js');
  require('../stories/StarRating.story.js');
  require('../stories/StepIcon.story.js');
  require('../stories/StickyNode.story.js');
  require('../stories/TabBar.story.js');
  require('../stories/Tabs.story.js');
  require('../stories/Tether.story.js');
  require('../stories/Tooltip.story.js');
  require('../stories/Type.story.js');
  require('../stories/ValueIcon.story.js');
  require('../stories/Video.story.js');
  require('../stories/VideoWithRichPoster.story.js');
}

configure(loadStories, module);
