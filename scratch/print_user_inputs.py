import os
import json

log_path = r"C:\Users\Amaan\.gemini\antigravity\brain\a560f167-0818-4009-a21f-ab6aad534b99\.system_generated\logs\transcript.jsonl"
out_path = r"C:\Users\Amaan\Downloads\Eiden Portfolio\scratch\user_inputs.txt"

if os.path.exists(log_path):
    user_inputs = []
    with open(log_path, 'r', encoding='utf-8') as f:
        for line in f:
            if '"type":"USER_INPUT"' in line:
                try:
                    data = json.loads(line)
                    user_inputs.append(data.get('content', ''))
                except Exception as e:
                    pass
    
    # Save the last 15 user inputs
    last_inputs = user_inputs[-15:]
    with open(out_path, 'w', encoding='utf-8') as out_f:
        for i, text in enumerate(last_inputs):
            out_f.write(f"--- USER INPUT {i+1} ---\n")
            out_f.write(text + "\n\n")
    print(f"Successfully saved {len(last_inputs)} user inputs to scratch/user_inputs.txt")
else:
    print("Log path not found")
