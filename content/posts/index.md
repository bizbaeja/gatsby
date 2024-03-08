---
emoji: 👩🏻‍💻
title: 'git@github.com Permission denied (publickey). 오류 해결'
date: '2023-10-06'
categories: git@github.com Permission denied (publickey).
---

## 문제상황

### `git push -u origin main` 이 되지 않는 현상

![1.png](/59/59_1.png)

```
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

## 이유

### PC에 SSH key가 올바르게 연결되어있지 않아서

## 해결방법

터미널에 이와같이 입력합니다.

```
ssh-keygen -t rsa -C "자신의 깃허브 이메일 주소"
```

이렇게 하면 터미널에 이와같이 출력됩니다.

- Generating public/private rsa key pair.
- Enter file in which to save the key (/Users/aeong/.ssh/id_rsa):
  -> Enter 누르면 됩니다.
- Enter passphrase (empty for no passphrase):
  -> Enter 누르면 됩니다.
- Enter same passphrase again:
  -> Enter 누르면 됩니다.
- Your identification has been saved in /Users/aeong/.ssh/id_rsa
  Your public key has been saved in /Users/aeong/.ssh/id_rsa.pub

여기까지 출력되면 맞습니다.

위 구문의 뜻은 ssh key 가 `~/.ssh/id_rsa.pub` 위치에 생성되었다는 뜻입니다.

이 키는 절대적으로 보안이 지켜져야 하는 키 이므로 함부로 공개해서는 안됩니다.

터미널에 `cat ~/.ssh/id_rsa.pub` 을 하면 ssh key 가 출력되므로 복사하시면 됩니다.

자신의 깃허브 - Settings 에 들어갑니다.
![2.png](/59/59_2.png)

New SSH Key 를 클릭합니다.
![3.png](/59/59_3.png)

타이틀은 적절하게 짓고, 복사해뒀던 ssh key 를 붙여넣고 생성합니다.

그리고 터미널에서 git push 를 합니다.
