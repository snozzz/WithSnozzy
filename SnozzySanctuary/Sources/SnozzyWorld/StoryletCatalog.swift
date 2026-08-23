import Foundation
import SnozzyDomain

public struct StoryletCatalog: Sendable {
    public let definitions: [StoryletDefinition]

    public init(definitions: [StoryletDefinition]) {
        self.definitions = definitions.sorted { $0.id < $1.id }
    }

    public init(data: Data) throws {
        self.init(definitions: try JSONDecoder().decode([StoryletDefinition].self, from: data))
    }

    public func eligible(for context: StoryletContext, state: WorldState) -> [StoryletDefinition] {
        definitions.filter { item in
            guard item.trigger == context.trigger,
                  state.companion.intensity >= item.minimumIntensity,
                  state.roomEchoes.count >= item.minimumEchoCount else { return false }
            if let intents = item.intents, !intents.contains(state.focus.intent) { return false }
            if let last = state.storylets.lastPlayedAt[item.id], context.at.milliseconds(since: last) < item.cooldownMilliseconds { return false }
            if let group = item.exclusiveGroup,
               let last = state.storylets.lastExclusiveGroupAt[group],
               context.at.milliseconds(since: last) < item.cooldownMilliseconds { return false }
            return true
        }
    }

    public static let builtIn = StoryletCatalog(definitions: [
        .init(id: "arrival_lamp", trigger: .launched, intents: nil, minimumIntensity: .quiet, minimumEchoCount: 0, cooldownMilliseconds: 43_200_000, exclusiveGroup: "arrival", priority: .companionReturn, action: .glanceWindow, line: "灯给你留着。", wantsTTS: false, autonomous: false),
        .init(id: "thread_named", trigger: .intentSelected, intents: nil, minimumIntensity: .quiet, minimumEchoCount: 0, cooldownMilliseconds: 3_600_000, exclusiveGroup: "thread", priority: .userDialogue, action: .planAlongside, line: "今天就沿着这根线走。", wantsTTS: true, autonomous: false),
        .init(id: "prepare_desk", trigger: .focusPreparing, intents: nil, minimumIntensity: .quiet, minimumEchoCount: 0, cooldownMilliseconds: 900_000, exclusiveGroup: "focus_open", priority: .phaseFeedback, action: .tidyDesk, line: "我把桌面清出一小块。", wantsTTS: false, autonomous: false),
        .init(id: "code_together", trigger: .workStarted, intents: [.coding, .writing], minimumIntensity: .balanced, minimumEchoCount: 0, cooldownMilliseconds: 1_800_000, exclusiveGroup: "work_start", priority: .phaseFeedback, action: .typeAlongside, line: "我也开始。", wantsTTS: false, autonomous: false),
        .init(id: "research_together", trigger: .workStarted, intents: [.researching, .reading], minimumIntensity: .balanced, minimumEchoCount: 0, cooldownMilliseconds: 1_800_000, exclusiveGroup: "work_start", priority: .phaseFeedback, action: .researchAlongside, line: "这一页，慢慢看。", wantsTTS: false, autonomous: false),
        .init(id: "star_landed", trigger: .workCompleted, intents: nil, minimumIntensity: .quiet, minimumEchoCount: 0, cooldownMilliseconds: 300_000, exclusiveGroup: "completion", priority: .phaseFeedback, action: .traceStar, line: "这一段时间落成星了。", wantsTTS: true, autonomous: false),
        .init(id: "first_constellation", trigger: .echoMilestone, intents: nil, minimumIntensity: .balanced, minimumEchoCount: 3, cooldownMilliseconds: 86_400_000, exclusiveGroup: "milestone", priority: .phaseFeedback, action: .traceStar, line: "三颗星，已经能连成路。", wantsTTS: true, autonomous: false),
        .init(id: "break_kettle", trigger: .breakStarted, intents: nil, minimumIntensity: .quiet, minimumEchoCount: 0, cooldownMilliseconds: 1_800_000, exclusiveGroup: "break", priority: .phaseFeedback, action: .coffee, line: "先让眼睛离开屏幕。", wantsTTS: false, autonomous: false),
        .init(id: "capsule_morning", trigger: .tomorrowCapsule, intents: nil, minimumIntensity: .quiet, minimumEchoCount: 0, cooldownMilliseconds: 86_400_000, exclusiveGroup: "capsule", priority: .userDialogue, action: .openCapsule, line: "昨天的你，给今天留了一句话。", wantsTTS: true, autonomous: false),
        .init(id: "welcome_back", trigger: .returned, intents: nil, minimumIntensity: .quiet, minimumEchoCount: 0, cooldownMilliseconds: 3_600_000, exclusiveGroup: "arrival", priority: .companionReturn, action: .closeMoment, line: "你回来啦。", wantsTTS: true, autonomous: false),
        .init(id: "quiet_window", trigger: .idle, intents: nil, minimumIntensity: .lively, minimumEchoCount: 0, cooldownMilliseconds: 3_600_000, exclusiveGroup: "ambient", priority: .idleChatter, action: .glanceWindow, line: "云刚刚换了个方向。", wantsTTS: false, autonomous: true),
        .init(id: "late_guard", trigger: .lateWork, intents: nil, minimumIntensity: .balanced, minimumEchoCount: 0, cooldownMilliseconds: 7_200_000, exclusiveGroup: "care", priority: .autonomousAction, action: .stretch, line: "很晚了，我陪你把这一小段收住。", wantsTTS: true, autonomous: true),
    ])
}
