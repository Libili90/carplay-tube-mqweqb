#import "CarPlaySceneDelegate.h"

@implementation CarPlaySceneDelegate

- (void)templateApplicationScene:(CPTemplateApplicationScene *)templateApplicationScene
        didConnectInterfaceController:(CPInterfaceController *)interfaceController {
    self.interfaceController = interfaceController;
    [self setupCarPlayInterface];
}

- (void)setupCarPlayInterface {
    CPListTemplate *listTemplate = [[CPListTemplate alloc] initWithTitle:@"CarPlay Tube"
                                                                 sections:@[[self createVideoSection]]];
    [self.interfaceController setRootTemplate:listTemplate animated:YES completion:nil];
}

- (CPListSection *)createVideoSection {
    NSMutableArray *items = [NSMutableArray array];
    
    for (int i = 1; i <= 10; i++) {
        NSString *title = [NSString stringWithFormat:@"Video %d", i];
        CPListItem *item = [[CPListItem alloc] initWithText:title detailText:@"Tap to play"];
        [item setHandler:^(id<CPSelectableListItem> item, dispatch_block_t completionBlock) {
            NSLog(@"Selected: %@", title);
            completionBlock();
        }];
        [items addObject:item];
    }
    
    return [[CPListSection alloc] initWithItems:items];
}

- (void)templateApplicationScene:(CPTemplateApplicationScene *)templateApplicationScene
didDisconnectInterfaceController:(CPInterfaceController *)interfaceController {
    self.interfaceController = nil;
}

@end
